/*
  # Initial Schema for AgencyLink

  1. New Tables
    - `agencies` - Stores recruitment agency information
    - `jobs` - Stores job listings posted by agencies
    - `applications` - Tracks job applications by users
    - `reviews` - Stores agency reviews by users
    - `profiles` - Stores user profile information
  
  2. Security
    - Enable RLS on all tables
    - Add security policies for each table
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  full_name text NOT NULL,
  avatar_url text DEFAULT '',
  email text NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'agency', 'job_seeker')),
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create agencies table
CREATE TABLE IF NOT EXISTS agencies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text NOT NULL,
  logo_url text DEFAULT '',
  description text NOT NULL,
  location text NOT NULL,
  industry text NOT NULL,
  website text DEFAULT '',
  founded_year int,
  employees_count int,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE agencies ENABLE ROW LEVEL SECURITY;

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id uuid REFERENCES agencies NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  salary_range text NOT NULL,
  industry text NOT NULL,
  employment_type text NOT NULL,
  experience_level text NOT NULL,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'rejected', 'accepted')),
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agency_id uuid REFERENCES agencies NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  rating int NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies for profiles table
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admin can view all profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Policies for agencies table
CREATE POLICY "Agencies are viewable by everyone"
  ON agencies
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Agency owners can update their agency"
  ON agencies
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Agency owners can delete their agency"
  ON agencies
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users with agency role can insert agencies"
  ON agencies
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE user_id = auth.uid() AND role = 'agency'
    )
  );

-- Policies for jobs table
CREATE POLICY "Jobs are viewable by everyone"
  ON jobs
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Agency owners can manage their jobs"
  ON jobs
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM agencies
      WHERE agencies.id = jobs.agency_id AND agencies.user_id = auth.uid()
    )
  );

-- Policies for applications table
CREATE POLICY "Job seekers can view their applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Job seekers can create applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid() AND profiles.role = 'job_seeker'
    )
  );

CREATE POLICY "Agency owners can view applications for their jobs"
  ON applications
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM jobs
      JOIN agencies ON jobs.agency_id = agencies.id
      WHERE jobs.id = applications.job_id AND agencies.user_id = auth.uid()
    )
  );

CREATE POLICY "Agency owners can update application status"
  ON applications
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM jobs
      JOIN agencies ON jobs.agency_id = agencies.id
      WHERE jobs.id = applications.job_id AND agencies.user_id = auth.uid()
    )
  );

-- Policies for reviews table
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);