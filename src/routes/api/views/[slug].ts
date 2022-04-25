import type { RequestHandler } from '@sveltejs/kit'

import { supabase } from '$root/lib/supabase'

export const get: RequestHandler = async ({ params }) => {
  const { data, error } = await supabase
    .from('views')
    .select('views')
    .match({ slug: params.slug })
    .single()

  if (error) {
    return { response: 404, body: { error: error.message } }
  }

  if (!data) {
    return { response: 404, body: { error: `The post doesn't exist.` } }
  }

  return {
    response: 202,
    body: { views: data.views },
    headers: { 'Content-Type': 'application/json' }
  }
}

export const post: RequestHandler = async ({ request }) => {
  const slug = await request.json()

  const views = await supabase
    .from('views')
    .select('views')
    .match({ slug })
    .single()

  if (!views.data) {
    const { error } = await supabase.from('views').insert({
      slug,
      views: 1
    })
    if (error) {
      return { response: 400, body: { error: error.message } }
    }
  }

  if (views.data) {
    const { error } = await supabase
      .from('views')
      .update({
        views: views.data.views + 1
      })
      .match({ slug })

    if (error) {
      return { response: 400, body: { error: error.message } }
    }
  }

  return {
    status: 303,
    headers: { location: '/' }
  }
}
