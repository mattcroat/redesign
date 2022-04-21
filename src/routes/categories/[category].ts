import type { RequestHandler } from '@sveltejs/kit'

import { getPostsByCategory } from '$root/lib/posts'
import { categories } from '$root/lib/config'

export const get: RequestHandler = async ({ params }) => {
  if (!categories[params.category]) {
    return {
      status: 404
    }
  }

  const posts = await getPostsByCategory(params.category)

  return {
    status: 200,
    body: { posts }
  }
}
