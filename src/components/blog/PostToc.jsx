import { getTranslations } from 'next-intl/server';

/** Table of contents built from the post's h2 headings; sticky beside the article on large screens. */
const PostToc = async ({ headings }) => {
  const t = await getTranslations('blog');
  if (!headings.length) return null;

  return (
    <nav aria-label={t('toc')} className='rounded-2xl border border-line bg-surface-alt p-6 lg:sticky lg:top-32'>
      <p className='font-poppins text-sm font-bold uppercase tracking-[0.16em] text-brand-700'>{t('toc')}</p>
      <ol className='mt-4 space-y-3 text-sm leading-snug'>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className='font-semibold text-ink-muted transition-colors hover:text-brand-700'>
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PostToc;
