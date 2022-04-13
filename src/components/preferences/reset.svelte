<script lang="ts">
  function useDefaults() {
    const htmlElement = document.documentElement
    htmlElement.style.setProperty('--post-txt-size', '16px')
    htmlElement.style.setProperty('--post-txt-length', '60ch')
    htmlElement.dataset.theme = '🌛 Night'
    delete htmlElement.dataset.font

    localStorage.theme = '🌛 Night'
    localStorage.textSize = '16px'
    localStorage.textLength = '60ch'
    localStorage.removeItem('font')
  }
</script>

<div class="reset-preferences">
  <span>Use default settings</span>
  <button on:click={useDefaults}>Reset</button>
</div>

<style>
  button {
    padding: var(--spacing-8) var(--spacing-16);
    font-weight: 700;
    color: var(--clr-input-txt);
    background-color: var(--clr-primary);
    border-radius: var(--rounded-4);
    box-shadow: var(--shadow-sm);
  }
</style>
