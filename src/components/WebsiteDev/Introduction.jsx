import React from 'react';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="scroll-in container mx-auto flex max-w-[1440px] flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('introduction.eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('introduction.title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">
            {t('introduction.subtitle')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in sm:grid-cols-2 lg:grid-cols-3">
          {t('introduction.sections', { returnObjects: true }).map((section, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-7 transition-colors ${index % 2 === 0 ? 'border-[#0f766e] bg-[#102a2d] text-white' : 'border-[#dfe7e1] bg-[#f5f7f4] text-black'}`}
            >
              <h3 className={`font-bold font-poppins text-2xl ${index % 2 === 0 ? 'text-white' : 'text-[#102a2d]'}`}>
                {section.title}
              </h3>
              <p className={`mt-4 font-poppins text-base leading-relaxed ${index % 2 === 0 ? 'text-[#dce9df]' : 'text-[#315b5d]'}`}>
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
