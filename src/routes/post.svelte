<script lang="ts">
  import Card from '$root/components/ui/card.svelte'
</script>

<svelte:head>
  <title>Post</title>
</svelte:head>

<main class="prose">
  <h1>Full Stack SvelteKit For Beginners</h1>

  <iframe
    title="SvelteKit For Beginners"
    src="https://www.youtube.com/embed/bLBHecY4-ak"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />

  <h2>Table of Contents</h2>

  <ul>
    <li><a href="/">Introduction</a></li>
    <li><a href="/">Project</a></li>
    <li><a href="/">Section</a></li>
    <li><a href="/">Source</a></li>
  </ul>

  <Card preset="edit" />

  <h2>Introduction</h2>

  <p>
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual form of a document or a typeface without
    relying on meaningful content. Lorem ipsum may be used as a placeholder
    before the final copy is available. It is also used to temporarily replace
    text in a process called greeking, which allows designers to consider the
    form of a webpage or publication, without the meaning of the text
    influencing the design.
  </p>

  <ul>
    <li>List item</li>
    <li>
      List item
      <ul>
        <li>Nested list item</li>
        <li>Nested list item</li>
      </ul>
    </li>
    <li>List item</li>
    <li>List item</li>
  </ul>

  <ol>
    <li>List item</li>
    <li>
      List item
      <ol>
        <li>Nested list item</li>
        <li>Nested list item</li>
      </ol>
    </li>
    <li>List item</li>
    <li>List item</li>
  </ol>

  <h2>Project</h2>

  <p>
    Lorem ipsum is typically a corrupted version of De finibus bonorum et
    malorum, a 1st-century BC text by the Roman statesman and philosopher
    Cicero, with words altered, added, and removed to make it nonsensical and
    improper Latin.
  </p>

  <img
    alt="Placeholder"
    src="https://images.unsplash.com/photo-1536007164800-b7f11331f35c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  />

  <p>
    Versions of the Lorem ipsum text have been used in typesetting at least
    since the 1960s, when it was popularized by advertisements for Letraset
    transfer sheets. Lorem ipsum was introduced to the digital world in the
    mid-1980s, when Aldus employed it in graphic and word-processing templates
    for its desktop publishing program PageMaker. Other popular word processors,
    including Pages and Microsoft Word, have since adopted Lorem ipsum as have
    many LaTeX packages, web content managers such as Joomla! and WordPress, and
    CSS libraries such as Semantic UI.
  </p>

  <h2>Source</h2>

  <p>
    The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of
    Cicero's 'De finibus bonorum et malorum'. The physical source may have been
    the 1914 Loeb Classical Library edition of De finibus, where the Latin text,
    presented on the left-hand (even) pages, breaks off on page 34 with "Neque
    porro quisquam est qui do-" and continues on page 36 with "lorem ipsum ...",
    suggesting that the galley type of that page was mixed up to make the dummy
    text seen today.
  </p>

  <img
    alt="Placeholder"
    src="https://images.unsplash.com/photo-1492362764835-5733512e3ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
  />

  <p>
    The discovery of the text's origin is attributed to Richard McClintock, a
    Latin scholar at Hampden–Sydney College. McClintock connected Lorem ipsum to
    Cicero's writing sometime before 1982 while searching for instances of the
    Latin word consectetur, which was rarely used in classical literature.
    McClintock first published his discovery in a 1994 letter to the editor of
    Before & After magazine, contesting the editor's earlier claim that Lorem
    ipsum held no meaning.
  </p>

  <Card preset="edit" />
  <Card preset="newsletter" />
</main>

<style>
  .prose h1 {
    margin: var(--spacing-64) 0;
    font-size: clamp(var(--font-48), 8vw, var(--font-96));
    line-height: clamp(48px, 10vw, 112px);
    color: var(--clr-primary);
    text-align: center;
  }

  .prose h2 {
    margin: var(--spacing-64) 0 var(--spacing-8) 0;
    color: var(--clr-primary);
  }

  .prose h2 + p {
    margin-top: 0;
  }

  .prose p {
    margin: var(--spacing-32) 0;
  }

  .prose ul,
  .prose ol {
    display: grid;
    row-gap: var(--spacing-8);
    list-style-type: none;
    list-style-position: inside;
  }

  .prose ul + ol,
  .prose ol + ul {
    margin-top: var(--spacing-32);
  }

  .prose li a {
    font-weight: inherit;
  }

  .prose ul li::before {
    content: '👉️';
    padding-right: var(--spacing-8);
  }

  .prose li > ul {
    margin-top: var(--spacing-8);
    padding-left: var(--spacing-16);
  }

  .prose li > ul > li {
    list-style-type: circle;
  }

  .prose li > ul > li::before {
    content: none;
  }

  .prose ol {
    list-style-type: decimal;
  }

  .prose li > ol {
    margin-top: var(--spacing-8);
    padding-left: var(--spacing-16);
  }

  .prose iframe,
  .prose img {
    width: 100%;
    grid-column: gutter-start / gutter-end;
    aspect-ratio: 16 / 9;
  }

  .prose img {
    object-fit: cover;
  }

  @media (min-width: 860px) {
    :global(.prose) {
      display: grid;
      grid-template-columns: 1fr [gutter-start] 40px [content-start] 70ch [content-end] 40px [gutter-end] 1fr;
    }

    :global(.prose > *) {
      grid-column: content-start / content-end;
    }

    .prose h1 {
      margin: var(--spacing-128) 0;
    }
  }
</style>
