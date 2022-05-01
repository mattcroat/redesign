import type { RequestHandler } from '@sveltejs/kit'

import { getPosts } from '$root/lib/posts'

export const get: RequestHandler = async () => {
  const posts = await getPosts()

  return {
    status: 200,
    body: { posts },
    headers: {
      // 'Cache-Control': `max-age=600, s-maxage=${60}`,
      // ETag: etag,
      // 'If-None-Match': etag
      'Cache-Control': `max-age=0, s-maxage=${60}`,
    },
  }
}
