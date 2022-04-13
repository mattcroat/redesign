<script lang="ts">
  import { fade } from 'svelte/transition'
  import {
    Popover,
    PopoverButton,
    PopoverPanel
  } from '@rgossiaux/svelte-headlessui'
  import { CogIcon } from '@rgossiaux/svelte-heroicons/outline'
  import Themes from './themes.svelte'

  let textSize = 16
  let textLength = 60
</script>

<Popover let:open class="popover">
  <PopoverButton>
    <CogIcon width="24" height="24" />
  </PopoverButton>

  {#if open}
    <div transition:fade={{ duration: 100 }}>
      <PopoverPanel class="popover-panel" static>
        <div class="preferences">
          <svg
            width="24"
            height="24"
            class="arrow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="inside"
              d="M23 24H1L11.0909 1.98341C11.4474 1.20562 12.5526 1.20562 12.9091 1.98341L23 24Z"
              fill="#0066FF"
            />
            <path
              id="outside"
              d="M12.8944 1.78885L24 24H23L12.9021 2.88628C12.5396 2.12822 11.4604 2.12822 11.0979 2.88628L1 24H0L11.1056 1.78885C11.4741 1.05181 12.5259 1.0518 12.8944 1.78885Z"
              fill="#FF0000"
            />
          </svg>

          <span class="title">Preferences</span>

          <div class="options">
            <div class="theme">
              <span>Theme</span>
              <Themes />
            </div>

            <div class="reading-size">
              <label for="text-size">
                <span>{textSize} pixels reading size</span>
              </label>
              <input
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
                bind:value={textLength}
                type="range"
                name="text-length"
                id="text-length"
                min="60"
                max="100"
                step="10"
              />
            </div>

            <div class="dyslexia">
              <label for="dyslexia">
                <span>Use font for dyslexia</span>
              </label>
              <input type="checkbox" name="dyslexia" id="dyslexia" />
            </div>

            <div class="reset-preferences">
              <span>Use default settings</span>
              <button>Reset</button>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </div>
  {/if}
</Popover>

<style>
  :global(.popover) {
    position: relative;
  }

  :global(.popover-panel) {
    position: absolute;
    top: 48px;
    right: -22px;
    z-index: 10;
  }

  .preferences {
    width: max-content;
    max-width: 400px;
    background-image: var(--clr-menu-bg);
    padding: var(--spacing-24);
    border: 1px solid var(--clr-menu-border);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-lg);
  }

  .preferences .arrow {
    position: absolute;
    top: -23px;
    right: 22px;
  }

  .preferences .arrow #inside {
    fill: var(--clr-menu-arrow-bg);
  }

  .preferences .arrow #outside {
    fill: var(--clr-menu-border);
  }

  .preferences .title {
    display: block;
    padding-bottom: var(--spacing-24);
    font-size: var(--font-24);
    font-weight: 700;
    line-height: 32px;
    border-bottom: 1px solid var(--clr-menu-border);
  }

  .preferences .options {
    font-weight: 500;
    color: var(--clr-menu-text);
  }

  .preferences .options > * {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-64);
    padding: var(--spacing-24) 0;
  }

  .preferences .options > *:not(:last-child) {
    border-bottom: 1px solid var(--clr-menu-border);
  }

  .preferences .options > *:last-child {
    padding-bottom: 0;
  }

  .preferences .options span {
    max-width: 180px;
  }

  button {
    padding: var(--spacing-8) var(--spacing-16);
    font-weight: 700;
    color: var(--clr-input-txt);
    background-color: var(--clr-primary);
    border-radius: var(--rounded-4);
    box-shadow: var(--shadow-sm);
  }

  input[type='range'] {
    appearance: none;
    height: 4px;
    background: hsl(0 0% 24%);
    border-radius: var(--rounded-20);
  }

  input[type='range']::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: var(--clr-primary);
    border-radius: 50%;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
  }
</style>
