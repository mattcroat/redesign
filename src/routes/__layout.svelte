<script lang="ts">
  import { browser } from '$app/env'

  import Header from '$root/components/ui/header.svelte'
  import Footer from '$root/components/ui/footer.svelte'
  import '$root/styles/global.css'

  let scrollY = 0
  const htmlElement = browser && document.documentElement

  $: {
    if (browser) {
      if (scrollY > 400) {
        htmlElement.style.setProperty('--blur-bg', '200px')
        htmlElement.style.setProperty('--blur-bg-opacity', '60%')
      } else {
        htmlElement.style.setProperty('--blur-bg', '0px')
        htmlElement.style.setProperty('--blur-bg-opacity', '40%')
      }
    }
  }
</script>

<svelte:window bind:scrollY />

<div class="grid">
  <Header />
  <slot />
  <Footer />
</div>

<style>
  :global(.grid) {
    height: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(12, [column-start] 1fr);
    column-gap: var(--spacing-24);
    margin-inline: auto;
    padding: 0 var(--spacing-16);
  }

  :global(.grid > *) {
    grid-column: column-start / span 12;
  }

  @media (min-width: 1240px) {
    .grid {
      padding: 0;
    }
  }
</style>
