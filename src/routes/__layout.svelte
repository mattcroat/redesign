<script lang="ts">
  import { page } from '$app/stores'

  import Header from '$root/components/ui/header.svelte'
  import Footer from '$root/components/ui/footer.svelte'
  import Transition from '$root/components/transition/index.svelte'

  import '$root/styles/global.css'
  import '$root/styles/post.css'
  import '$root/styles/themes.css'
  import '$root/styles/code.css'
</script>

<Transition type="fade">
  <div class="grid">
    <Header />
    <Transition type="page" url={$page.url}>
      <slot />
    </Transition>
    <Footer />
  </div>
</Transition>

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
