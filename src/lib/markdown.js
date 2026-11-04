// Minimal, dependency-free Markdown subset used by the blog.
//
// Supported block syntax:
//   ## Heading 2          ### Heading 3
//   blank line            separates paragraphs
//   - item  /  * item     bullet list
//   1. item               numbered list
//   > text                highlighted callout / quote
// Supported inline syntax: **bold**, *italic*, `code`, [text](url)
//
// Content is rendered to React elements (never injected as raw HTML), so a post
// cannot inject markup or scripts.

export function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parseMarkdown(source) {
  const lines = String(source).replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let paragraph = [];
  let list = null;
  let inQuote = false;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      flushParagraph();
      flushList();
      inQuote = false;
      continue;
    }

    let match = line.match(/^(#{2,3})\s+(.*)$/);
    if (match) {
      flushParagraph();
      flushList();
      inQuote = false;
      const text = match[2].trim();
      blocks.push({ type: match[1].length === 2 ? 'h2' : 'h3', text, id: slugify(text) });
      continue;
    }

    match = line.match(/^>\s?(.*)$/);
    if (match) {
      flushParagraph();
      flushList();
      if (inQuote) {
        blocks[blocks.length - 1].text += ` ${match[1].trim()}`;
      } else {
        blocks.push({ type: 'quote', text: match[1].trim() });
        inQuote = true;
      }
      continue;
    }
    inQuote = false;

    match = line.match(/^[-*]\s+(.*)$/);
    if (match) {
      flushParagraph();
      if (!list || list.type !== 'ul') {
        flushList();
        list = { type: 'ul', items: [] };
      }
      list.items.push(match[1].trim());
      continue;
    }

    match = line.match(/^\d+\.\s+(.*)$/);
    if (match) {
      flushParagraph();
      if (!list || list.type !== 'ol') {
        flushList();
        list = { type: 'ol', items: [] };
      }
      list.items.push(match[1].trim());
      continue;
    }

    flushList();
    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function extractHeadings(blocks) {
  return blocks.filter((block) => block.type === 'h2').map(({ text, id }) => ({ text, id }));
}
