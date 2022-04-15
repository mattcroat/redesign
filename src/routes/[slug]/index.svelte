<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import { siteName, siteUrl, twitterHandle } from '$root/lib/config'
  import type { FrontMatterType } from '$root/types'

  export let content: string
  export let frontmatter: FrontMatterType

  let overlay = false

  onMount(() => {
    const headingElement = document.querySelector('h1')

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0 // invoke when element is not visible
    }

    function handleIntersect([entry]) {
      !entry.isIntersecting ? (overlay = true) : (overlay = false)
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(headingElement)

    return () => observer.unobserve(headingElement)
  })
</script>

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

<main>
  {#if overlay}
    <div transition:fade={{ duration: 300 }} class="overlay" />
  {/if}
  <div class="prose">
    {@html content}
  </div>
  <div>
    <!-- Edit -->
    <!-- Newsletter -->
  </div>
</main>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background-image: radial-gradient(hsl(173 100% 4% / 40%), var(--clr-bg));
    backdrop-filter: blur(20px);
    z-index: -1;
  }
</style>
