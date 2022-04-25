<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'

  import Card from '$root/components/ui/card.svelte'
  import { fileUrl, siteName, siteUrl, twitterHandle } from '$root/lib/config'
  import type { FrontMatterType } from '$root/types'

  export let content: string
  export let frontmatter: FrontMatterType

  let overlay = false
  let editUrl = `${fileUrl}/${frontmatter.slug}/${frontmatter.slug}.md`

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

  onMount(() => {
    const copyBtnElement = document.querySelectorAll('.copy')

    function copyToClipboard(event: Event) {
      const buttonElement = event.currentTarget as HTMLButtonElement
      const codeTitleElement = buttonElement.parentElement
      const codeElement = codeTitleElement.nextElementSibling
      navigator.clipboard.writeText(codeElement.textContent)
    }

    copyBtnElement.forEach((btn) => {
      btn.innerHTML = `
        <span class="sr-only">Copy</span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
        </svg>
      `
      btn.addEventListener('click', copyToClipboard)
    })

    return () =>
      copyBtnElement.forEach((btn) =>
        btn.removeEventListener('click', copyToClipboard)
      )
  })

  async function updateViews(slug: string): Promise<void> {
    await fetch(`api/views/${slug}`, {
      method: 'post',
      body: JSON.stringify(slug),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  updateViews(frontmatter.slug)
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
  <div class="cards">
    <Card preset="edit" {editUrl} />
    <Card preset="newsletter" />
  </div>
</main>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background-image: var(--post-overlay-bg);
    backdrop-filter: blur(20px);
    z-index: -1;
  }

  .cards {
    display: grid;
    row-gap: var(--spacing-32);
    max-width: var(--post-txt-length);
    margin: var(--spacing-32) 0;
    margin-inline: auto;
  }
</style>
