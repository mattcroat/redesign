<script lang="ts">
  import { CogIcon, MenuAlt1Icon } from '@rgossiaux/svelte-heroicons/outline'

  let textSize = 16
  let textLength = 60
</script>

<header>
  <div class="logo">
    <a href="/">Joy of Code</a>
  </div>

  <nav>
    <div class="container">
      <CogIcon width="24" height="24" />

      <div class="preferences">
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_70_819)">
            <path
              d="M9.13397 2.5C9.51887 1.83333 10.4811 1.83333 10.866 2.5L19.5263 17.5C19.9112 18.1667 19.4301 19 18.6603 19H1.33975C0.569945 19 0.0888208 18.1667 0.473721 17.5L9.13397 2.5Z"
              fill="#222627"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_70_819"
              x="0.337891"
              y="0"
              width="19.3242"
              height="19"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_70_819"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_70_819"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <span class="title">Preferences</span>

        <div class="options">
          <div class="theme">
            <span>Theme</span>
            <button>Theme</button>
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

          <div class="reset-preferences">
            <span>Use default settings</span>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>

    <div class="menu">
      <MenuAlt1Icon width="24" height="24" />
    </div>
  </nav>
</header>

<style>
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

  .container {
    position: relative;
  }

  .preferences {
    width: max-content;
    max-width: 400px;
    position: absolute;
    top: 48px;
    right: -23px;
    background-image: var(--clr-menu-bg);
    padding: var(--spacing-24);
    border: 1px solid var(--clr-menu-border);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-lg);
  }

  .preferences svg {
    position: absolute;
    top: -17px;
    right: 24px;
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

  nav :global(svg) {
    cursor: pointer;
  }
</style>
