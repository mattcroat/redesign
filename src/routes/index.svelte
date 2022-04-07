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
    <div class="logo">
      <a href="/">Joy of Code</a>
    </div>

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

  <footer>
    <div class="categories">
      <p>Categories</p>
      <ul>
        <li><a href="/javascript">JavaScript</a></li>
        <li><a href="/react">React</a></li>
        <li><a href="/css">CSS</a></li>
        <li><a href="/general">General</a></li>
        <li><a href="/design">Design</a></li>
        <li><a href="/git">Git & GitHub</a></li>
        <li><a href="/next">Next.js</a></li>
        <li><a href="/typescript">TypeScript</a></li>
        <li><a href="/svelte">Svelte</a></li>
      </ul>
    </div>

    <div class="follow">
      <p>Follow</p>
      <ul>
        <li><a href="/newsletter">Newsletter</a></li>
        <li><a href="/rss">RSS</a></li>
        <li>
          <a href="https://www.youtube.com/c/joyofcodedev" target="_blank">
            YouTube
          </a>
        </li>
        <li>
          <a href="https://twitter.com/joyofcodedev" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/mattcroat" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>

    <div class="other">
      <p>Other</p>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/uses">Uses</a></li>
      </ul>
    </div>

    <figure>
      <blockquote>
        <span>
          “Talent is a pursued interest. Anything that you're willing to
          practice, you can do.”
        </span>
      </blockquote>
      <figcaption>— Bob Ross</figcaption>
    </figure>
  </footer>
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

  .logo a::before {
    content: none;
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

  footer {
    display: grid;
    grid-template-columns: repeat(12, [column-start] 1fr);
    column-gap: var(--spacing-24);
    margin-top: var(--spacing-64);
    padding: var(--spacing-32);
    background-color: var(--clr-footer-bg);
    border-radius: var(--rounded-20) var(--rounded-20) 0 0;
  }

  footer p {
    font-weight: 700;
  }

  footer ul {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    row-gap: var(--spacing-16);
    margin-top: var(--spacing-16);
  }

  footer .categories {
    grid-column: column-start 1 / span 4;
  }

  footer .follow {
    grid-column: column-start 5 / span 2;
  }

  footer .other {
    grid-column: column-start 7 / span 2;
  }

  footer li a {
    font-weight: inherit;
    color: var(--clr-footer-txt-muted);
  }

  footer li a:hover {
    color: var(--clr-primary);
  }

  footer figure {
    position: relative;
    align-self: center;
    grid-column: column-start 9 / -1;
    z-index: 1;
  }

  footer figure::before {
    content: '';
    width: 240px;
    height: 240px;
    position: absolute;
    top: -25%;
    right: 25%;
    background-image: linear-gradient(
      120deg,
      hsl(270, 70%, 40%),
      hsl(225, 74%, 58%)
    );
    border-radius: 100%;
    z-index: -1;
  }

  footer blockquote {
    font-size: var(--font-32);
    font-family: var(--font-serif);
    text-shadow: 2px 2px 10px hsl(0 0% 0% / 10%);
  }

  footer figcaption {
    margin-top: var(--spacing-4);
  }
</style>
