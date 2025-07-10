import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development'

// Create mock client for development when Supabase is not configured
const createMockClient = () => ({
  auth: {
    signUp: () => Promise.resolve({ 
      data: null, 
      error: { message: 'Supabase not configured - using localStorage fallback' } 
    }),
    signInWithPassword: () => Promise.resolve({ 
      data: null, 
      error: { message: 'Supabase not configured - using localStorage fallback' } 
    }),
    signInWithOAuth: () => Promise.resolve({ 
      data: null, 
      error: { message: 'Supabase not configured - using localStorage fallback' } 
    }),
    getSession: () => Promise.resolve({ data: { session: null } }),
    onAuthStateChange: () => ({ 
      data: { 
        subscription: { 
          unsubscribe: () => {} 
        } 
      } 
    })
  }
})

// Initialize Supabase client
const initializeSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (isDevelopment) {
      console.warn('Supabase environment variables are missing. Using mock client for development.')
      return createMockClient()
    } else {
      throw new Error('Missing Supabase environment variables')
    }
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = initializeSupabase()