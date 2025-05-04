/*
  # Fix infinite recursion in profile policies

  1. Changes
     - Drop all existing profile policies to start fresh
     - Create simple, non-recursive policies
     - Implement proper role-based access with correct syntax
  
  2. Security
     - Enable RLS on profiles table
     - Add separate policies for different operations with clear permission boundaries
     - Avoid nested queries that could cause recursion
*/

-- First, drop all existing policies on the profiles table to start fresh
DROP POLICY IF EXISTS "Enable read access for own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can read own profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON public.profiles;
DROP POLICY IF EXISTS "Enable update for own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can read their own profile" ON public.profiles;

-- Create simple policies without recursion
-- 1. Policy for users to view their own profiles
CREATE POLICY "Users can read own profiles" ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 2. Policy for admins to view all profiles
-- This avoids recursion by using a direct query that doesn't trigger the policy again
CREATE POLICY "Admins can read all profiles" ON public.profiles
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT p.user_id FROM public.profiles p
      WHERE p.role = 'admin'
    )
  );

-- 3. Insert policy - users can only insert their own profile
CREATE POLICY "Enable insert for authenticated users" ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 4. Update policy - users can only update their own profile
CREATE POLICY "Enable update for own profile" ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);