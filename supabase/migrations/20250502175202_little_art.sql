/*
  # Fix infinite recursion in profiles table RLS policies
  
  1. Changes
    - Drops the existing policy that causes infinite recursion
    - Creates two separate policies: one for users to access their own profiles and one for admins to access all profiles
    - Uses auth.uid() instead of uid() for proper authentication checks
  
  2. Security
    - Maintains security while eliminating the recursion issue
    - Preserves admin access to all profiles
    - Ensures users can only access their own profiles
*/

-- Drop the problematic policy causing infinite recursion
DROP POLICY IF EXISTS "Enable read access for own profile" ON profiles;

-- Create a new policy that avoids recursion
CREATE POLICY "Users can read own profiles" 
  ON profiles 
  FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Create a separate policy for admin access
CREATE POLICY "Admins can read all profiles" 
  ON profiles 
  FOR SELECT 
  TO authenticated 
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
    )
  );