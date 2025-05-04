import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Create a Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please connect to Supabase.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);