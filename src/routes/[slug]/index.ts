import type { RequestHandler } from '@sveltejs/kit'

import { getPost } from '$root/lib/posts'

export const get: RequestHandler = async ({ params }) => {
  const { content, frontmatter } = await getPost(params.slug)

  return {
    status: 200,
    body: { content, frontmatter },
    headers: { 'Cache-Control': `max-age=0, s-maxage=${60}` }
  }
}
