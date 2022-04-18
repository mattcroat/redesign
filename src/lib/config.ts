export const siteName = 'Joy Of Code'
export const siteUrl = 'http://localhost:3000/'
export const twitterHandle = '@joyofcodedev'

export const api = 'https://api.github.com'
export const owner = 'mattcroat'
export const repo = 'redesign'
export const path = 'posts'

export const categories = {
  javascript: 'JavaScript',
  react: 'React',
  css: 'CSS',
  general: 'General',
  design: 'Design',
  git: 'Git & GitHub',
  next: 'Next.js',
  typescript: 'TypeScript',
  svelte: 'Svelte',
  sveltekit: 'SvelteKit'
}

// https://api.github.com/repos/mattcroat/gitkit/contents/data/posts.json
export const postsDataUrl = `${api}/repos/${owner}/${repo}/contents/data/posts.json`

// https://api.github.com/repos/mattcroat/gitkit/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`

// https://github.com/mattcroat/gitkit/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts`

// https://raw.githubusercontent.com/mattcroat/gitkit/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts`
