import { createClient } from "@supabase/supabase-js"

// For demo purposes, we'll use placeholder values if environment variables aren't set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key"

// Create a mock client for demo purposes when real credentials aren't available
const createMockClient = () => ({
  auth: {
    signInWithPassword: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signInWithOAuth: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
  },
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: [], error: null }),
    update: () => ({ data: [], error: null }),
    delete: () => ({ data: [], error: null }),
  }),
})

export const supabase = supabaseUrl.includes("placeholder")
  ? createMockClient()
  : createClient(supabaseUrl, supabaseAnonKey)

// Server-side client
export const createServerClient = () => {
  return supabaseUrl.includes("placeholder") ? createMockClient() : createClient(supabaseUrl, supabaseAnonKey)
}
