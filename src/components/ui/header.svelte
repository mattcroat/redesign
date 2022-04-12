<script lang="ts">
  import { CogIcon, MenuAlt1Icon } from '@rgossiaux/svelte-heroicons/outline'
</script>

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

<style>
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
</style>
