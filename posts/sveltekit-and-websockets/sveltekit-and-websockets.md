---
title: Using SvelteKit And WebSockets
description: Learn how to use a custom SvelteKit server for WebSockets.
slug: sveltekit-and-websockets
published: 2022-5-1
category: sveltekit
draft: true
---

# Using WebSockets With SvelteKit

## Table of Contents

## The Problem

SvelteKit by default doesn't have any special API for WebSockets as it's a priority for after SvelteKit has an official release.

You can't open a web socket connection from a SvelteKit endpoint so to solve the problem you can create a separate server but that's awful and I'm tired of dealing with the Node modules ecosystem.

If you're reading this in the future SvelteKit might have native support for WebSockets similar to how it does HTTP request methods so it might be worth it checking the documentation.

```ts:endpoint.ts showLineNumbers
export const  get: RequestHandler = async () => { /* ... */ }

export const  post: RequestHandler = async () => { /* ... */ }

// This doesn't exist yet unfortunately 😅
export async function ws: WebSocketRequestHandler = async () => { /* ... */ }
```

I found this inside a [discussion about native support for WebSockets inside SvelteKit](https://github.com/sveltejs/kit/issues/1491) if you want to have a read.

## Using a Simple WebSocket Server Vite Plugin For Development

To make use of WebSockets during development you can hook into the Vite development server.

Thanks to [Bob Fanger](https://github.com/bfanger) for his [workaround](https://github.com/sveltejs/kit/issues/1491#issuecomment-955205323).

This might sound intimidating but it's not — trust me I'm not an expert on this. 😂

Vite has a [configureServer hook](https://vitejs.dev/guide/api-plugin.html#configureserver) which lets you configure the development server.

This is the code for the Vite plugin.

```js:example.js showLineNumbers
const plugin = {
  name: 'plugin',
  configureServer(server) {
    // we can pass the server to Socket.io
    const io = new Server(server.httpServer)
    // ...
  }
}
```

That's it! The final example only has more code related to Socket.io.

```js:svelte.config.js {3, 5-21, 28-30} showLineNumbers
import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import { Server } from 'socket.io'

const webSocketServer = {
  name: 'webSocketServer',
  async configureServer(server) {
    // do whatever you have to do 🪄
    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {      
      // receive a message from the client
      socket.on('update', async (message) => {
        console.log(message)

        // send message to the client
        socket.emit('update',  'Goodbye, World!")
      })
    })
  },
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [webSocketServer],
    }
  },
}

export default config
```

> 🐿️ Use a dynamic import if you need to import code that's not a module inside `webSocketServer` for example `const code = await import('./code.js')` otherwise you're going to encounter an error.

## Using a Custom Server For Production

Thanks to the [SvelteKit Node adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) you can create a [custom server](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) and do whatever you want.

I'm going to use Express just for WebSockets and let SvelteKit handle everything else using middleware so you don't have separate backends.