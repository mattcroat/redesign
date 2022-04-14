<script lang="ts">
  import { browser } from '$app/env'

  const rootElement = browser ? document.documentElement : null
  const userTextSize = browser && localStorage.textSize
  const userTextLength = browser && localStorage.textLength

  let textSize = userTextSize ? userTextSize.replace('px', '') : 16
  let textLength = userTextLength ? userTextLength.replace('ch', '') : 60

  function handleFontSizeChange() {
    localStorage.textSize = `${textSize}px`
    rootElement.style.setProperty('--post-txt-size', `${textSize}px`)
  }

  function handleTextLengthChange() {
    localStorage.textLength = `${textLength}ch`
    rootElement.style.setProperty('--post-txt-length', `${textLength}ch`)
  }
</script>

<div class="reading-size">
  <label for="text-size">
    <span>{textSize} pixels reading size</span>
  </label>
  <input
    on:change={handleFontSizeChange}
    bind:value={textSize}
    type="range"
    name="text-size"
    id="text-size"
    min="16"
    max="24"
    step="2"
  />
</div>

<div class="reading-length">
  <label for="text-length">
    <span>{textLength} characters reading length</span>
  </label>
  <input
    on:change={handleTextLengthChange}
    bind:value={textLength}
    type="range"
    name="text-length"
    id="text-length"
    min="60"
    max="100"
    step="10"
  />
</div>

<style>
  input[type='range'] {
    appearance: none;
    height: 4px;
    background-color: hsl(0 0% 24%);
    border-radius: var(--rounded-20);
  }

  input[type='range']::-webkit-slider-thumb,
  input[type='range']::-moz-range-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--clr-primary);
    border-radius: 50%;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
  }
</style>
