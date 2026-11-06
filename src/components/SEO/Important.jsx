import { getTranslations } from 'next-intl/server';

const Important = async () => {
  const t = await getTranslations('important');

  return (
    <section className="flex items-center justify-center bg-surface-alt">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">{t('eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl">
            {t('heading1')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            {t('subheading1')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in md:grid-cols-2">
          <article className="rounded-2xl border border-brand-green-700 bg-ink p-7">
            <h3 className="font-poppins text-2xl font-bold text-white md:text-3xl">
              {t('box1.title')}
            </h3>
            <p className="mt-4 font-poppins text-base leading-relaxed text-soft md:text-lg">
              {t('box1.content')}
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-white p-7">
            <h3 className="font-poppins text-2xl font-bold text-ink md:text-3xl">
              {t('box2.title')}
            </h3>
            <p className="mt-4 font-poppins text-base leading-relaxed text-ink-muted md:text-lg">
              {t('box2.content')}
            </p>
          </article>
        </div>
        <div className="mt-14 max-w-3xl">
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl">
            {t('heading2')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            {t('paragraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Important;
