<script lang="ts">
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'

  export let type: 'fade' | 'stagger' | 'page'
  export let stagger = 0
  export let url: URL = null

  let animate = false

  onMount(() => {
    animate = true
  })
</script>

{#if animate}
  {#if type === 'fade'}
    <div in:fade={{ duration: 250 }}>
      <slot />
    </div>
  {/if}
{/if}

{#if animate}
  {#if type === 'stagger'}
    <div in:fly={{ y: 50, duration: stagger * 300, delay: 300 }}>
      <slot />
    </div>
  {/if}
{/if}

{#if type === 'page'}
  {#key url}
    <div in:fly={{ y: -50, duration: 250 }}>
      <slot />
    </div>
  {/key}
{/if}
