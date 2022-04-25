# Joy of Code

![Bob Ross](https://i.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif)

## 🧑‍🎨 What is Joy of Code?

[Joy of Code](https://joyofcode.xyz/) is a digital garden growing curious minds with a vide variety of topics from web development to web design.

## 🤗 Contribute

**First time contributors are welcome** — in fact this is the reason why I made it possible for others to edit posts and contribute.

At the end of each post there's a direct link to the **Markdown** file of the post you can edit inside GitHub.

You can read the [contributing guidelines](CONTRIBUTING.md) to learn more.

## 🧭 Technologies

- ⚡️ [SvelteKit](https://kit.svelte.dev/) is used for the frontend with server-side rendering and plain HTML, CSS and JavaScript
- [GitHub API](https://docs.github.com/en/rest) is used to manage content by using GitHub as a content management system
- The editor is also made with SvelteKit and takes advantage of the GitHub API and uses [Monaco](https://github.com/microsoft/monaco-editor) as the editor to manage content
- Posts are stored inside the `posts` folder and are used to build the page using the GitHub API but `data` is where metadata about posts is stored in a single `posts.json` to serve as a database

## Setup

The project uses [pnpm](https://pnpm.io/) but you can use any other package manager.

Clone the project.

```sh
git clone https://github.com/mattcroat/joy-of-code.git
```

Install the dependencies.

```sh
pnpm i
```

Run the development server using `pnpm run dev` or build and preview using `pnpm run build && pnpm run preview`.

```sh
pnpm run dev
```
