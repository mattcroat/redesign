import type { RequestHandler } from '@sveltejs/kit'

import { getPostsByCategory } from '$root/lib/posts'

export const get: RequestHandler = async ({ params }) => {
  const posts = await getPostsByCategory(params.category)

  return {
    status: 200,
    body: { posts }
  }
}
