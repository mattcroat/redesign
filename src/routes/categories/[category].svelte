<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'

  import { posts } from '$root/data/posts.json'
</script>

<Heading>Category</Heading>
<Posts {posts}>
  <div class="container" slot="title">
    <div>
      <span class="tag">Category</span>
    </div>
    <div>
      <span class="results">{posts.length}</span> results
    </div>
  </div>
</Posts>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .tag {
    padding: var(--spacing-16);
    font-weight: 700;
    background-color: var(--clr-bg);
    border-radius: var(--rounded-20);
    box-shadow: var(--shadow-sm);
  }

  .results {
    font-weight: 700;
  }
</style>
