<script lang="ts">
  import { ArrowNarrowRightIcon } from '@rgossiaux/svelte-heroicons/outline'

  import Newsletter from '$root/components/ui/newsletter.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import { posts } from '$root/data/posts.json'

  export const prerender = true
</script>

<svelte:head>
  <title>Joy of Code</title>
</svelte:head>

<main>
  <section class="hero">
    <div class="latest-post">
      <span class="kicker">Latest post</span>
      <h1 class="title">TypeScript fundamentals</h1>
      <p class="description">
        Learn how learning TypeScript can make you popular with the ladies.
      </p>
      <a class="continue-reading" href="/">
        <span>Continue reading</span>
        <ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
      </a>
    </div>

    <div class="divider" />

    <div class="newsletter">
      <h2>Subscribe for updates</h2>
      <Newsletter />
      <p>Subscribe to the <a href="/">RSS feed</a> instead.</p>
    </div>
  </section>

  <Posts {posts}>
    <h3 slot="title">Popular</h3>
  </Posts>

  <Posts {posts}>
    <h3 slot="title">Latest</h3>
    <a slot="see-more" href="/posts">
      <span>See more</span>
      <ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
    </a>
  </Posts>

  <Posts {posts}>
    <h3 slot="title">Series</h3>
    <a slot="see-more" href="/series">
      <span>See more</span>
      <ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
    </a>
  </Posts>

  <Posts {posts}>
    <h3 slot="title">Picks</h3>
  </Posts>
</main>

<style>
  .hero {
    margin-top: var(--spacing-64);
    padding: var(--spacing-24);
    background: var(--clr-hero-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .latest-post .kicker {
    font-weight: 500;
    color: var(--clr-hero-txt);
  }

  .latest-post .title {
    padding: var(--spacing-8) 0 var(--spacing-16) 0;
    color: var(--clr-primary);
  }

  .latest-post .description {
    color: var(--clr-hero-txt);
  }

  .latest-post .continue-reading {
    width: max-content;
    display: flex;
    align-items: center;
    margin-top: var(--spacing-32);
  }

  .latest-post a {
    display: flex;
    gap: var(--spacing-16);
  }

  .divider {
    border-bottom: 1px solid var(--clr-hero-divider-bg);
    margin: var(--spacing-32) 0;
  }

  .newsletter p {
    color: var(--clr-hero-txt);
  }

  @media (min-width: 860px) {
    .hero {
      display: grid;
      grid-template-columns: repeat(12, [column-start] 1fr);
      column-gap: var(--spacing-24);
    }

    .latest-post {
      grid-column: column-start 2 / span 4;
    }

    .divider {
      grid-column: column-start 7 / span 1;
      justify-self: center;
      margin: 0;
      border-left: 1px solid var(--clr-hero-divider-bg);
      border-bottom: none;
    }

    .newsletter {
      display: grid;
      place-content: center;
      grid-auto-rows: min-content;
      grid-column: column-start 8 / span 4;
    }
  }
</style>
