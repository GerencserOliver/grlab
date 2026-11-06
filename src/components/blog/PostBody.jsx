import Link from 'next/link';
import { parseMarkdown } from '../../lib/markdown';

const SAFE_HREF = /^(\/|#|https:\/\/|mailto:|tel:)/;
const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\)|`[^`]+`)/g;

function renderInline(text, keyPrefix) {
  return text.split(INLINE).filter(Boolean).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    let match = part.match(/^\*\*([^*]+)\*\*$/);
    if (match) return <strong key={key} className='font-bold text-ink'>{match[1]}</strong>;

    match = part.match(/^\*([^*]+)\*$/);
    if (match) return <em key={key}>{match[1]}</em>;

    match = part.match(/^`([^`]+)`$/);
    if (match) {
      return <code key={key} className='rounded bg-surface-tint px-1.5 py-0.5 text-[0.9em] text-ink'>{match[1]}</code>;
    }

    match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      const linkClass = 'font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900';
      if (!SAFE_HREF.test(href)) return label;
      if (href.startsWith('/')) {
        return <Link key={key} href={href} className={linkClass}>{label}</Link>;
      }
      const external = href.startsWith('https://');
      return (
        <a
          key={key}
          href={href}
          className={linkClass}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }

    return part;
  });
}

const BODY_TEXT = 'text-lg leading-8 text-ink-body';

/** Renders a post body (Markdown subset, see lib/markdown.js) as styled React elements. */
const PostBody = ({ body }) => {
  const blocks = parseMarkdown(body);

  return (
    <div>
      {blocks.map((block, index) => {
        const key = `block-${index}`;
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={key} id={block.id} className='mt-14 scroll-mt-32 font-poppins text-2xl font-extrabold leading-tight text-ink md:text-3xl'>
                {renderInline(block.text, key)}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={key} id={block.id} className='mt-10 scroll-mt-32 font-poppins text-xl font-bold text-ink md:text-2xl'>
                {renderInline(block.text, key)}
              </h3>
            );
          case 'ul':
            return (
              <ul key={key} className={`mt-5 list-disc space-y-2 pl-6 marker:text-brand-700 ${BODY_TEXT}`}>
                {block.items.map((item, i) => <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>)}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} className={`mt-5 list-decimal space-y-2 pl-6 marker:font-bold marker:text-brand-700 ${BODY_TEXT}`}>
                {block.items.map((item, i) => <li key={`${key}-${i}`}>{renderInline(item, `${key}-${i}`)}</li>)}
              </ol>
            );
          case 'quote':
            return (
              <blockquote key={key} className={`mt-8 rounded-2xl border-l-4 border-brand-700 bg-surface-alt p-6 ${BODY_TEXT}`}>
                {renderInline(block.text, key)}
              </blockquote>
            );
          default:
            return (
              <p key={key} className={`mt-5 ${BODY_TEXT}`}>
                {renderInline(block.text, key)}
              </p>
            );
        }
      })}
    </div>
  );
};

export default PostBody;
