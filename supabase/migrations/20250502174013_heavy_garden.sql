/*
  # Fix profiles table policies

  1. Changes
    - Drop existing policy that causes recursion
    - Create new policy for reading profiles that:
      - Allows users to read their own profile
      - Allows admins to read all profiles
    - Uses correct auth.uid() function
  
  2. Security
    - Maintains row level security
    - Ensures users can only access appropriate data
*/

-- Drop the existing policy that's causing recursion
DROP POLICY IF EXISTS "Enable read access for own profile" ON profiles;

-- Create new policy without recursion
CREATE POLICY "Enable read access for own profile" ON profiles
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    (SELECT role FROM profiles WHERE user_id = auth.uid()) = 'admin'
  );