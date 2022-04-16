import { markdownToHTML } from './markdown'
import { postsDataUrl, postsUrl } from './config'
import type {
  PostMarkdownType,
  PostsType,
  PostType,
  RateType
} from '$root/types'

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
 * Get post by slug from GitHub
 */
export async function getPost(slug: string): Promise<PostMarkdownType> {
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

/**
 * Get posts from GitHub
 */
export async function getPosts(): Promise<PostsType> {
  const response = await fetch(postsDataUrl, {
    headers: {
      ...headers,
      // https://docs.github.com/en/rest/overview/media-types
      Accept: 'application/vnd.github.v3.raw'
    }
  })

  if (!response.ok) {
    throw new Error('💩 Could not fetch posts!')
  }

  const posts: PostType[] = await response.json()
  const postLimit = 4
  const characterLimit = 80

  const filteredPosts = posts
    .filter((post) => !post.draft)
    .map((post) => {
      const descriptionLength = post.description.length
      const ellipsis = descriptionLength > characterLimit ? '...' : ''
      const description =
        post.description.substring(0, characterLimit) + ellipsis

      return {
        ...post,
        description
      }
    })

  function getLatestPosts(posts: PostType[]): PostType[] {
    return posts
      .sort((firstElement, secondElement) => {
        return (
          new Date(secondElement.published).getTime() -
          new Date(firstElement.published).getTime()
        )
      })
      .slice(0, postLimit)
  }

  // Hit Supabase API to get views
  // function getPopularPosts(posts: PostType[]): PostType[] {
  //   return posts.sort((firstElement, secondElement) => {
  //     return firstElement.views - secondElement.views
  //   })
  // }

  function getSeries(posts: PostType[]): PostType[] {
    return posts.filter((post) => post.series).slice(0, postLimit)
  }

  function getPicks(posts: PostType[]): PostType[] {
    return posts.sort(() => Math.random() - 0.5).slice(0, postLimit)
  }

  const latestPost = getLatestPosts(filteredPosts)[0]
  const latest = getLatestPosts(filteredPosts)
  const popular = latest // placeholder
  const series = getSeries(filteredPosts)
  const picks = getPicks(filteredPosts)

  return {
    latestPost,
    latest,
    popular,
    series,
    picks
  }
}

/**
 * Gets posts by category from GitHub
 */
export async function getPostsByCategory(
  category: string
): Promise<PostType[]> {
  const response = await fetch(postsDataUrl, {
    headers: {
      ...headers,
      // https://docs.github.com/en/rest/overview/media-types
      Accept: 'application/vnd.github.v3.raw'
    }
  })

  if (!response.ok) {
    throw new Error('💩 Could not fetch posts!')
  }

  const posts: PostType[] = await response.json()
  const postsByCategory = posts.filter((post) => post.category === category)

  return postsByCategory
}
