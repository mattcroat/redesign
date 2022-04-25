# Joy of Code

![Bob Ross](https://i.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif)

## 🧑‍🎨 What is Joy of Code?

[Joy of Code](https://joyofcode.xyz/) is a digital garden growing curious minds with a wide variety of topics from web development to web design.

## 🤗 Contribute

**First time contributors are welcome** — in fact this is the reason why I wanted to make it possible so you can get your first open source contribution.

At the end of each post there's a direct link to the **Markdown** file of the post you can edit inside GitHub. You can read the [contributing guidelines](CONTRIBUTING.md) to learn more.

## 🧭 Technologies

- ⚡️ [SvelteKit](https://kit.svelte.dev/) is used for the frontend with server-side rendering and prerendering static pages
- 🔌 [GitHub API](https://docs.github.com/en/rest) is used to manage content so GitHub is the content management system
- The editor uses ⚡️ SvelteKit for the frontend and 📜 [Monaco Editor](https://github.com/microsoft/monaco-editor) (code editor which powers [VS Code](https://code.visualstudio.com/)) as the editor to manage content using the 🔌 GitHub API
- ✍️ Posts are stored inside the `posts` folder and are used to build the page using the 🔌 GitHub API but `data` is where posts metadata is stored in a single `posts.json` to serve as a database
- The project is hosted on [Vercel](https://vercel.com/) and uses [ignored build step](https://vercel.com/docs/concepts/projects/overview#ignored-build-step) thanks to `ignore-step.mjs` to avoid redeploy for those special folders

## 🗺️ Setup

The project uses 📦️ [pnpm](https://pnpm.io/) but you can use any other package manager.

👬 Clone the project.

```sh
git clone https://github.com/mattcroat/joy-of-code.git
```

📦️ Install the dependencies.

```sh
pnpm i
```

📜 Run the development server using `pnpm run dev` or build and preview using `pnpm run build && pnpm run preview`.

```sh
pnpm run dev
```
