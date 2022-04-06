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
    <section class="hero">
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
          <button type="submit">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Subscribe</span>
          </button>
        </form>
        <p>Subscribe to the <a href="/">RSS feed</a> instead.</p>
      </div>
    </section>

    <section class="popular">
      <h3>Popular</h3>
      <div class="cards">
        <a href="/">
          <article class="card">
            <span class="views">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>9,000</span>
            </span>
            <div class="details">
              <span class="title">TypeScript Fundamentals</span>
              <p class="description">
                Learn how TypeScript can help you with the ladies.
              </p>
            </div>
          </article>
        </a>
      </div>
    </section>
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

  .popular {
    margin-top: var(--spacing-64);
  }

  .cards {
    display: grid;
    gap: var(--spacing-24);
    grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
    margin-top: var(--spacing-32);
  }

  .cards a {
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .cards a::before {
    content: none;
  }

  .card {
    height: 400px;
    display: grid;
    grid-template-rows: min-content;
    padding: var(--spacing-16);
    background-image: var(--clr-card-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s ease-in-out, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-md);
  }

  .card .views {
    display: flex;
    gap: var(--spacing-4);
    font-weight: 500;
    color: var(--clr-card-txt-muted);
  }

  .card .details {
    align-self: end;
  }

  .card .title {
    margin-bottom: var(--spacing-8);
    font-family: var(--font-serif);
    font-size: var(--font-32);
    font-weight: 700;
    line-height: 48px;
  }

  .card .description {
    color: var(--clr-card-txt-muted);
  }
</style>
