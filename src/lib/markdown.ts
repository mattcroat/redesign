import { unified } from 'unified'
import fromMarkdown from 'remark-parse'
import fromMarkdownToHtml from 'remark-rehype'
import parseHtmlAndMarkdown from 'rehype-raw'
import toHtml from 'rehype-stringify'
import matter from 'gray-matter'

// plugins
import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from 'remark-smartypants'
import remarkTableofContents from 'remark-toc'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

import type { FrontMatterType } from '$root/types'

type ContentType = {
  content: string
  frontmatter: FrontMatterType
}

export async function markdownToHTML(markdown: string): Promise<ContentType> {
  const { content, data } = matter(markdown)

  // I could use `compile` from mdsvex to get
  // Svelte components working inside Markdown
  const result = await unified()
    .use(fromMarkdown)
    .use([
      // GitHub flavored Markdown
      remarkGfm,
      // Unique identifier for headings
      remarkHeadings,
      // Links for headings
      remarkSlug,
      // Typographic punctuation like real quotes
      remarkSmartypants,
      // Generates table of contents from headings
      // `tight` removes <p> from <li> when nested
      [remarkTableofContents, { tight: true }],
      // Remove paragraph around images
      remarkUnwrapImages
    ])
    // To be able to parse a mix of Markdown and HTML
    // `remark-rehype` is required with `rehype-raw`
    // https://github.com/rehypejs/rehype-raw
    .use(fromMarkdownToHtml, { allowDangerousHtml: true })
    .use(rehypeCodeTitles)
    .use(rehypePrism)
    .use(parseHtmlAndMarkdown)
    .use(toHtml)
    .process(content)
  const processedMarkdown = result.value

  return {
    content: processedMarkdown as string,
    frontmatter: data as FrontMatterType
  }
}
