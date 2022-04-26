import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getViews(slug: string): Promise<string> {
  const response = await fetch(`/api/views/${slug}`)
  const { views } = await response.json()
  return views.toLocaleString()
}

export async function updateViews(slug: string): Promise<void> {
  await fetch(`api/views/${slug}`, {
    method: 'post',
    body: JSON.stringify(slug),
    headers: { 'Content-Type': 'application/json' }
  })
}
