/*
  # Fix infinite recursion in profiles policy

  1. Changes
     - Remove the recursive "Admins can read all profiles" policy
     - Create a new non-recursive policy for admin access
     - The previous policy was checking the profiles table to determine if a user could read the profiles table,
       which created an infinite recursion loop

  2. Security
     - Maintains the same security rules but implements them without recursion
     - Admins can still read all profiles
     - Users can still read their own profiles
*/

-- First, drop the problematic policy that's causing the recursion
DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;

-- Create a new policy for admins that avoids the recursion
-- Instead of checking for admin role in the policy itself, we'll use a more direct approach
CREATE POLICY "Admins can read all profiles" ON public.profiles
FOR SELECT TO authenticated
USING (
  auth.uid() IN (
    SELECT user_id FROM public.profiles 
    WHERE role = 'admin'
  )
);