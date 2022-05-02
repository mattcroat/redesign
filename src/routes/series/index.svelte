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
  <title>Series</title>
</svelte:head>

<Heading>Series</Heading>

<Posts {posts} {views}>
  <div class="container" slot="title">
    <h3>Entries</h3>
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
