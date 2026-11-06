// ---------------------------------------------------------------------------
// BLOG POST TEMPLATE – copy this file to content/blog/posts/<slug>.js
// (this file itself is not imported anywhere, so it never shows up on the site)
//
// Body syntax (Markdown subset):
//   ## Heading 2 (appears in the table of contents)     ### Heading 3
//   - bullet list        1. numbered list
//   > highlighted callout
//   **bold**  *italic*  `code`  [link text](/contact)  [external](https://example.com)
// Do not use backticks or the ${ sequence inside `body` (it is a template literal).
// ---------------------------------------------------------------------------

const post = {
  // URL: /blog/<slug>. Lowercase ASCII, hyphens only. Never change it after publishing.
  slug: 'your-post-slug',
  publishedAt: '2026-01-01', // YYYY-MM-DD
  updatedAt: '2026-01-01', // bump when you materially edit the post
  featured: false, // true = shown as the large card on /blog (otherwise the newest post is)
  accent: 'teal', // cover colour: 'teal' | 'brand' (blue-green) | 'slate'
  icon: 'code', // cover icon: 'chart' | 'search' | 'cogs' | 'code' | 'rocket' | 'lightbulb'

  hu: {
    title: 'Cikk címe (kb. 50–65 karakter, a fő kulcsszóval)',
    description: 'Meta leírás a Google találati listához (kb. 140–155 karakter).',
    excerpt: 'Rövid felvezető a kártyákra és a cikk elejére (1–2 mondat).',
    keywords: ['elsődleges kulcsszó', 'másodlagos kulcsszó'],
    tags: ['Első címke', 'Második címke'],
    body: `
Bevezető bekezdés.

## Első és alcím

Szöveg – [belső link](/contact).
`,
  },

  // Optional: if `en` is missing, the Hungarian version is shown to English visitors.
  en: {
    title: 'Post title (about 50–65 characters, with the main keyword)',
    description: 'Meta description for search results (about 140–155 characters).',
    excerpt: 'Short intro for the cards and the top of the article (1–2 sentences).',
    keywords: ['primary keyword', 'secondary keyword'],
    tags: ['First tag', 'Second tag'],
    body: `
Intro paragraph.

## First subheading

Text – [internal link](/contact).
`,
  },
};

export default post;
