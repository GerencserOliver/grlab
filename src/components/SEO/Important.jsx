import { getTranslations } from 'next-intl/server';

const Important = async () => {
  const t = await getTranslations('important');

  return (
    <section className="flex items-center justify-center bg-[#f5f7f4]">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('heading1')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">
            {t('subheading1')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in md:grid-cols-2">
          <article className="rounded-2xl border border-[#0f766e] bg-[#102a2d] p-7">
            <h3 className="font-poppins text-2xl font-bold text-white md:text-3xl">
              {t('box1.title')}
            </h3>
            <p className="mt-4 font-poppins text-base leading-relaxed text-[#dce9df] md:text-lg">
              {t('box1.content')}
            </p>
          </article>
          <article className="rounded-2xl border border-[#dfe7e1] bg-white p-7">
            <h3 className="font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl">
              {t('box2.title')}
            </h3>
            <p className="mt-4 font-poppins text-base leading-relaxed text-[#315b5d] md:text-lg">
              {t('box2.content')}
            </p>
          </article>
        </div>
        <div className="mt-14 max-w-3xl">
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('heading2')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">
            {t('paragraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Important;
