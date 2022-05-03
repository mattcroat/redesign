<script lang="ts">
  import { fly } from 'svelte/transition'

  interface Transition {
    type: 'fade' | 'stagger' | 'page'
    duration?: number
    delay?: number
    url?: URL
  }

  export let transition: Transition
</script>

{#if transition.type === 'page'}
  {#key transition.url}
    <div in:fly={{ y: -50, duration: 250 }}>
      <slot />
    </div>
  {/key}
{/if}

{#if transition.type === 'fade'}
  <div
    class="fade"
    style:animation-duration="{transition.duration}ms"
    style:animation-delay="{transition.delay}ms"
  >
    <slot />
  </div>
{/if}

{#if transition.type === 'stagger'}
  <div
    class="stagger"
    style:animation-duration="{transition.duration * 300}ms"
    style:animation-delay="{transition.delay}ms"
  >
    <slot />
  </div>
{/if}

<style>
  div {
    height: 100%;
  }

  .fade {
    animation-name: fadeIn;
  }

  .stagger {
    animation-name: stagger;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes stagger {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0px);
    }
  }
</style>
