import { writable } from 'svelte/store'
import { browser } from '$app/env'

import { getViews } from '$root/lib/supabase'

let postViews = []

if (browser) {
  postViews = await getViews()
}

export const views = writable(postViews)
