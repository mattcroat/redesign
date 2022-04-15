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

export type PostType = {
  content: string
  frontmatter: FrontMatterType
  postMarkdown: string
}
