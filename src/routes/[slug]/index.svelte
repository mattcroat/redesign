<script lang="ts">
  import { browser } from '$app/env'

  import { siteName, siteUrl, twitterHandle } from '$root/lib/config'
  import type { FrontMatterType } from '$root/types'

  export let content: string
  export let frontmatter: FrontMatterType

  let scrollY = 0
  const rootElement = browser && document.documentElement

  $: {
    if (browser) {
      if (scrollY > 600) {
        rootElement.style.setProperty('--blur-bg', '200px')
        rootElement.style.setProperty('--blur-bg-opacity', '60%')
        rootElement.style.setProperty('--blur-bg-opacity-unsupported', '80%')
      }

      if (scrollY < 600) {
        rootElement.style.setProperty('--blur-bg', '0px')
        rootElement.style.setProperty('--blur-bg-opacity', '40%')
        rootElement.style.setProperty('--blur-bg-opacity-unsupported', '40%')
      }
    }
  }
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <title>{frontmatter.title}</title>

  <meta content={frontmatter.description} name="description" />

  <meta content={frontmatter.title} property="og:title" />
  <meta content={frontmatter.image} property="og:image" />
  <meta content={siteUrl} property="og:url" />
  <meta content={frontmatter.description} property="og:description" />
  <meta content={siteName} property="og:site_name" />

  <meta content={twitterHandle} name="twitter:creator" />
  <meta content="summary_large_image" name="twitter:card" />
  <meta content={frontmatter.title} name="twitter:title" />
  <meta content={frontmatter.description} name="twitter:description" />
  <meta content={frontmatter.image} name="twitter:image" />
</svelte:head>

<main class="prose">
  {@html content}
</main>
