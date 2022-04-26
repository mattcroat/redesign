import type { RequestHandler } from '@sveltejs/kit'

import { getPosts } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const { series } = await getPosts()

  return {
    status: 200,
    body: { posts: series },
    headers: { 'Cache-Control': `max-age=0, s-maxage=${60}` }
  }
}
