# Joy of Code

![Bob Ross](https://i.giphy.com/media/d31vTpVi1LAcDvdm/giphy.gif)

## 🧑‍🎨 What is Joy of Code?

[Joy of Code](https://joyofcode.xyz/) is a digital garden growing curious minds with a wide variety of topics from web development to web design.

## 🧭 Technologies

- ⚡️ [SvelteKit](https://kit.svelte.dev/) is used for the frontend with server-side rendering and prerendering static pages
- 🔌 [GitHub API](https://docs.github.com/en/rest) is used to manage content so GitHub is the content management system
- The editor uses ⚡️ SvelteKit for the frontend and 📜 [Monaco Editor](https://github.com/microsoft/monaco-editor) (code editor which powers [VS Code](https://code.visualstudio.com/)) as the editor to manage content using the 🔌 GitHub API
- ✍️ Posts are stored inside the `posts` folder and are used to build the page using the 🔌 GitHub API but `data` is where posts metadata is stored in a single `posts.json` to serve as a database
- The project is hosted on [Vercel](https://vercel.com/) and uses [ignored build step](https://vercel.com/docs/concepts/projects/overview#ignored-build-step) thanks to `ignore-step.mjs` to avoid redeploy for those special folders
- The tests use [Playwright](https://playwright.dev/) for end-to-end testing
- For analytics I use [Google Analytics](https://analytics.google.com/) and don't store any personal or identifiable data and I try to turn off anything spooky
- For the newsletter I use [Buttondown](https://buttondown.email/) when I remember to send one and it's awesome
- I use [Supabase](https://supabase.com/) for the post views

## 🙏 Use Issues to Find Answers

If you need help or something changed and isn't working when following a post or video series I made you can go to the [issues](https://github.com/mattcroat/redesign/issues) and find the right to find the answer or bring it to my attention — I hope in general people might even help each other out this way.

This avoids having to hunt down the issue you have in YouTube comments or places like Discord that aren't indexed by search results and are lost forever.

## 🤗 Contribute

**First time contributors are welcome** — in fact this is the reason why I wanted to make it possible to contribute so you can get your first open source contribution.

At the end of each post there's a direct link to the **Markdown** file of the post you can edit within GitHub. Read the [contributing guidelines](CONTRIBUTING.md) to learn more.

## 👷 Setup

The project uses 📦️ [pnpm](https://pnpm.io/) but any package manager is going to work.

👬 Clone the project.

```sh
git clone https://github.com/mattcroat/joy-of-code.git
```

📦️ Install the dependencies.

```sh
pnpm i
```

📜 Run the development server with `pnpm run dev` or build and preview the project with `pnpm run build && pnpm run preview`.

```sh
pnpm run dev
```
