<script lang="ts">
  import { page } from '$app/stores'

  import Heading from '$root/components/ui/heading.svelte'
  import Posts from '$root/components/ui/posts.svelte'
  import type { PostType } from '$root/types'

  export let posts: PostType[]
  const category = $page.params.category

  const categories = {
    javascript: 'JavaScript',
    react: 'React',
    css: 'CSS',
    general: 'General',
    design: 'Design',
    git: 'Git & GitHub',
    next: 'Next.js',
    typescript: 'TypeScript',
    svelte: 'Svelte',
    sveltekit: 'SvelteKit'
  }
</script>

<Heading>{categories[category]}</Heading>
<Posts {posts}>
  <div class="container" slot="title">
    <div>
      <span class="tag">{category}</span>
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
