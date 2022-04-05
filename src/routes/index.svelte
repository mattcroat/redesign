<svelte:head>
  <title>Joy of Code</title>
</svelte:head>

<div class="grid">
  <header>
    <div class="logo">Joy of Code</div>

    <nav>
      <div class="preferences">
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>

      <div class="menu">
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
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </nav>
  </header>

  <main>
    <div class="hero">
      <div class="latest-post">
        <span class="kicker">Latest post</span>
        <h1 class="title">TypeScript fundamentals</h1>
        <p class="description">
          Learn how learning TypeScript can make you popular with the ladies.
        </p>
        <a class="continue-reading" href="/">
          <span>Continue reading</span>
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div class="divider" />

      <div class="newsletter">
        <h2>Subscribe for updates</h2>
        <form>
          <input type="email" placeholder="you@example.com" />
          <button type="submit">Subscribe</button>
        </form>
        <p>Subscribe to the <a href="/">RSS feed</a> instead.</p>
      </div>
    </div>
  </main>
</div>

<style>
  .grid {
    max-width: 1200px;
    /* height: 100%; useless because auto rows */
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
    padding: var(--spacing-32) 0;
  }

  .logo {
    grid-column: 2 / 3;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
  }

  nav {
    display: flex;
    margin-left: auto;
    gap: var(--spacing-16);
  }

  .preferences,
  .menu {
    cursor: pointer;
  }

  .hero {
    display: grid;
    grid-template-columns: repeat(12, [column-start] 1fr);
    column-gap: var(--spacing-24);
    margin: var(--spacing-64) 0;
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
    margin-top: var(--spacing-32);
  }

  .divider {
    grid-column: column-start 7 / span 1;
    justify-self: center;
    border-left: 1px solid var(--clr-hero-divider-bg);
  }

  .newsletter {
    display: grid;
    place-content: center;
    grid-auto-rows: min-content;
    grid-column: column-start 8 / span 4;
  }

  /* sort out link styles baka */

  a {
    color: var(--clr-text);
    font-weight: 700;
    text-decoration: none;
  }

  .latest-post a {
    display: flex;
    gap: var(--spacing-16);
  }
</style>
