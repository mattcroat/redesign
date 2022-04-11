<script lang="ts">
  import Newsletter from '$root/components/ui/newsletter.svelte'
</script>

<h1>Newsletter</h1>

<div class="newsletter">
  <h3>Subscribe for updates and tasty web development treats</h3>
  <Newsletter />
</div>

<style>
  h1 {
    margin: var(--spacing-64) 0;
    font-size: clamp(var(--font-48), 8vw, var(--font-96));
    line-height: clamp(48px, 10vw, 112px);
    color: var(--clr-primary);
    text-align: center;
  }

  .newsletter {
    display: grid;
    justify-items: center;
  }

  h3 {
    margin-bottom: var(--spacing-32);
    text-transform: capitalize;
  }

  @media (min-width: 860px) {
    h1 {
      margin: var(--spacing-128) 0;
    }

    .newsletter {
      display: grid;
      justify-items: center;
      margin-bottom: var(--spacing-128);
    }
  }
</style>
