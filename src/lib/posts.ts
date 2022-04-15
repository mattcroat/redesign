import { markdownToHTML } from './markdown'
import { postsUrl } from './config'
import type { PostType, RateType } from '$root/types'

const headers = {
  // GitHub suggests to include the API version
  Accept: 'application/vnd.github.v3+json',
  Authorization: `token ${process.env.GH_TOKEN}`
}

/**
 * For measuring the GitHub API rate limit
 */
export async function getRateLimit(): Promise<RateType> {
  const response = await fetch('https://api.github.com/rate_limit', { headers })
  const { resources } = await response.json()
  const { limit, used, remaining, reset } = resources.core

  const currentTime = new Date()
  const resetTime = new Date(reset * 1000)

  const remainingMinutes = +(
    (resetTime.getTime() - currentTime.getTime()) /
    1000 /
    60
  ).toFixed()

  const resetTimeLocale = resetTime.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return {
    limit,
    used,
    remaining,
    remainingMinutes,
    reset,
    resetTimeLocale
  }
}

/**
 * Gets post by slug from GitHub
 */
export async function getPost(slug: string): Promise<PostType> {
  const postUrl = `${postsUrl}/${slug}/${slug}.md`

  const response = await fetch(postUrl, {
    headers: {
      ...headers,
      // https://docs.github.com/en/rest/overview/media-types
      Accept: 'application/vnd.github.v3.raw'
    }
  })

  if (!response.ok) {
    throw new Error(`💩 Could not fetch ${postUrl}`)
  }

  const postMarkdown = await response.text()
  const { content, frontmatter } = await markdownToHTML(postMarkdown)

  return { content, frontmatter, postMarkdown }
}
