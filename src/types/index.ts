export type RateType = {
  limit: number
  used: number
  remaining: number
  remainingMinutes: number
  reset: string
  resetTimeLocale: string
}

export type FrontMatterType = {
  title: string
  description: string
  slug: string
  published: string
  category: string
  image: string
}

export type PostMarkdownType = {
  content: string
  frontmatter: FrontMatterType
  postMarkdown: string
}

export type PostType = {
  title: string
  description: string
  slug: string
  published: string
  category: string
  image: string
  series: string
  draft: string
}

export type PostsType = {
  latestPost: PostType
  popular: PostType[]
  latest: PostType[]
  series: PostType[]
  picks: PostType[]
}
