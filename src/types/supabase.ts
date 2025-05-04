export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      agencies: {
        Row: {
          id: string
          name: string
          logo_url: string
          description: string
          location: string
          industry: string
          website: string
          founded_year: number
          employees_count: number
          featured: boolean
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string
          description: string
          location: string
          industry: string
          website?: string
          founded_year?: number
          employees_count?: number
          featured?: boolean
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string
          description?: string
          location?: string
          industry?: string
          website?: string
          founded_year?: number
          employees_count?: number
          featured?: boolean
          created_at?: string
          user_id?: string
        }
      }
      jobs: {
        Row: {
          id: string
          title: string
          description: string
          location: string
          salary_range: string
          industry: string
          employment_type: string
          experience_level: string
          agency_id: string
          featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          location: string
          salary_range: string
          industry: string
          employment_type: string
          experience_level: string
          agency_id: string
          featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          location?: string
          salary_range?: string
          industry?: string
          employment_type?: string
          experience_level?: string
          agency_id?: string
          featured?: boolean
          created_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          job_id: string
          user_id: string
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          job_id: string
          user_id: string
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          job_id?: string
          user_id?: string
          status?: string
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          agency_id: string
          user_id: string
          rating: number
          comment: string
          created_at: string
        }
        Insert: {
          id?: string
          agency_id: string
          user_id: string
          rating: number
          comment: string
          created_at?: string
        }
        Update: {
          id?: string
          agency_id?: string
          user_id?: string
          rating?: number
          comment?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string
          avatar_url: string
          email: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          full_name: string
          avatar_url?: string
          email: string
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string
          avatar_url?: string
          email?: string
          role?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}