<script lang="ts">
  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import { getViews } from '$root/lib/supabase'
  import type { PostType, ViewType } from '$root/types'

  export let posts: PostType[]

  let views: ViewType[]
  getViews().then((data) => (views = data))
</script>

<svelte:head>
  <title>Articles</title>
  <meta content="List of {posts.length} articles." name="description" />
</svelte:head>

<Heading>Articles</Heading>

<Posts {posts} {views}>
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
