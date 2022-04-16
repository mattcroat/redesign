import { readable } from 'svelte/store'

/**
 * Sound credit
 * https://www.zapsplat.com/music/organic-button-click-good-for-apps-games-ui-software-etc-7/
 */

const click = new Audio('sfx/click.mp3')
click.volume = 0.4

export const sounds = readable({ click })
