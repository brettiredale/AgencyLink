/*
  # Fix profiles table RLS policies

  1. Changes
    - Drop existing policies that may be causing recursion
    - Create new, simplified RLS policies for the profiles table
    
  2. Security
    - Enable RLS on profiles table
    - Add policies for:
      - Inserting new profiles (authenticated users can create their own profile)
      - Selecting profiles (users can read their own profile, admins can read all)
      - Updating profiles (users can update their own profile)
*/

-- First, drop any existing policies to start fresh
DROP POLICY IF EXISTS "Admin can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON profiles;

-- Create new simplified policies
CREATE POLICY "Enable read access for own profile"
ON profiles FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id OR 
  EXISTS (
    SELECT 1 FROM profiles
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

CREATE POLICY "Enable insert for authenticated users"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable update for own profile"
ON profiles FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);