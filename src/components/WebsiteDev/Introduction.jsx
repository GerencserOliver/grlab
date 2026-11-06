import { getTranslations, getMessages } from 'next-intl/server';

const Introduction = async () => {
  const t = await getTranslations('introduction');
  const messages = await getMessages();
  const sections = messages?.introduction?.sections || [];

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">{t('eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted md:text-xl">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(sections) && sections.map((section, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-7 transition-colors ${index % 2 === 0 ? 'border-brand-green-700 bg-ink text-white' : 'border-line bg-surface-alt text-ink'}`}
            >
              <h3 className={`font-bold font-poppins text-2xl ${index % 2 === 0 ? 'text-white' : 'text-ink'}`}>
                {section.title}
              </h3>
              <p className={`mt-4 font-poppins text-base leading-relaxed ${index % 2 === 0 ? 'text-soft' : 'text-ink-muted'}`}>
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
