<script lang="ts">
  import Posts from '$root/components/posts.svelte'
  import { posts } from '$root/data/posts.json'

  import {
    ArrowNarrowRightIcon,
    CogIcon,
    MailIcon,
    MenuAlt1Icon,
  } from '@rgossiaux/svelte-heroicons/outline'
</script>

<svelte:head>
  <title>Joy of Code</title>
</svelte:head>

<div class="grid">
  <header>
    <div class="logo">Joy of Code</div>

    <nav>
      <div class="preferences">
        <CogIcon width="24" height="24" />
      </div>

      <div class="menu">
        <MenuAlt1Icon width="24" height="24" />
      </div>
    </nav>
  </header>

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
        <form>
          <input type="email" placeholder="you@example.com" />
          <button type="submit">
            <MailIcon width="24" height="24" aria-hidden="true" />
            <span>Subscribe</span>
          </button>
        </form>
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
</div>

<style>
  .grid {
    max-width: 1200px;
    display: grid;
    column-gap: var(--spacing-24);
    margin: 0 auto;
    grid-template-columns: repeat(12, [column-start] 1fr);
    grid-auto-rows: minmax(min-content, max-content);
  }

  .grid > * {
    grid-column: column-start / span 12;
  }

  header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: var(--spacing-32);
  }

  .logo {
    grid-column: 2 / 3;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
  }

  nav {
    display: flex;
    gap: var(--spacing-16);
    margin-left: auto;
  }

  .preferences,
  .menu {
    cursor: pointer;
  }

  .hero {
    display: grid;
    grid-template-columns: repeat(12, [column-start] 1fr);
    column-gap: var(--spacing-24);
    margin-top: var(--spacing-64);
    padding: var(--spacing-32) 0;
    background: var(--clr-hero-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .latest-post {
    grid-column: column-start 2 / span 4;
  }

  .latest-post .kicker {
    color: var(--clr-hero-txt-muted);
  }

  .latest-post .title {
    padding: var(--spacing-8) 0 var(--spacing-16) 0;
    color: var(--clr-primary);
  }

  .latest-post .description {
    color: var(--clr-hero-txt-muted);
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
    grid-column: column-start 7 / span 1;
    justify-self: center;
    border-left: 1px solid var(--clr-hero-divider-bg);
  }

  .newsletter {
    min-width: 360px;
    display: grid;
    place-content: center;
    grid-auto-rows: min-content;
    grid-column: column-start 8 / span 4;
  }

  .newsletter form {
    display: flex;
    height: 48px;
    margin: var(--spacing-16) 0;
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .newsletter input {
    width: 100%;
    padding: var(--spacing-8) var(--spacing-16);
    background-color: var(--clr-input-bg);
    border-radius: var(--rounded-4) 0 0 var(--rounded-4);
  }

  .newsletter input::placeholder {
    color: var(--clr-input-placeholder-txt);
  }

  .newsletter button {
    display: flex;
    gap: var(--spacing-4);
    align-items: center;
    padding: var(--spacing-8);
    color: var(--clr-input-txt);
    background-color: var(--clr-primary);
    font-weight: 700;
    border-radius: 0 var(--rounded-4) var(--rounded-4) 0;
  }

  .newsletter p {
    color: var(--clr-hero-txt-muted);
  }
</style>
