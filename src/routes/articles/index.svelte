<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import type { PostType } from '$root/types'

  export let posts: PostType[]
</script>

<Heading>Articles</Heading>
<Posts {posts}>
  <div class="container" slot="title">
    <h3>Archive</h3>
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

  .results {
    font-weight: 700;
  }
</style>
