---
title: Svelte Headless UI
description: Svelte Headless UI is an awesome unopinionated component library.
slug: sveltekit-headless-ui
published: 2022-4-29
category: svelte
draft: true
---

# Svelte Headless UI

## Table of Contents

## Svelte Headless UI

You might be used to using a component library like [Material UI](https://sveltematerialui.com/) or any other which is great if you enjoy it but you can find yourself fighting against it's opinions.

A headless UI component library on the other hand doesn't have opinions — meaning it's completely **unstyled** giving you complete control not only over styles but how you compose components by only exposing the logic to you like lego pieces.

[Svelte Headless UI](https://svelte-headlessui.goss.io/docs) is a port of the [Headless UI for Tailwind CSS](https://headlessui.dev/) component library. It works great with Tailwind but it's **optional** - in fact I don't use Tailwind in Svelte projects because I prefer to write regular CSS when I can which is harder to do using React.

Svelte Headless UI has 9 components including **Dialog**, **Disclosure**,  **Listbox**, **Menu**, **Popover**,  **Radio Group**, **Switch**, **Tabs** and **Transition**.

A major benefit of using any component library is that it takes care of accesibility for you and Svelte Headless UI is no exception and is also fully typed with TypeScript and compatible with [SvelteKit](https://kit.svelte.dev/).

If you worked with React you might have heard about [Reach UI](https://reach.tech/) which is also great.

## HTML is Hard

I'm not joking! Have you ever tried to style a HTML `<select>` element? What you quickly realize is that you have to make your own custom element.

Not a problem, right? Just some simple HTML, CSS and JavaScript.

**Wrong**.

What most people don't realize about HTML is the hidden complexity of **accessibility**. To implement a custom HTML `<select>` element that is also accessible you have to follow the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards guideliness.

> 🐿️ WAI-ARIA, the Accessible Rich Internet Applications Suite, defines a way to make Web content and Web applications more accessible to people with disabilities.

If you want to make a custom `<select>` menu yourself **you can** but you don't want to spend hours reading [WAI-ARIA practices on making a listbox](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html).

This is what component libraries take care of for us and when I need something simpler and don't want to reinvent the wheel I reach for a headless UI solution.

## Listbox Example

Let me show you how simple it is to make a custom `<select>` menu using the `<Listbox>` component and Svelte transitions.

First you need to open the [documentation for listbox](https://svelte-headlessui.goss.io/docs/listbox) where you can also play around with the example.

It's like playing with lego (this is what I mean by composable) and the lego blocks available to us are `<Listbox>`, `<ListboxButton>`, `<ListboxOptions>`, `<ListboxOption>` and `<ListboxLabel>`.

```js:example.js {1} showLineNumbers
console.log('Excelsior!')
```

{% img src="image.webp" alt="Description" %}

{% embed src="image.webp" title="Description" %}

{% video src="video.mp4" %}
