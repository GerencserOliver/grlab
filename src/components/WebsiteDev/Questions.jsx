import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Questions = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqData = t('questions.faqData', { returnObjects: true }) || [];
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Array.isArray(faqData) ? faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })) : [],
  };

  return (
    <section className="bg-[#f5f7f4] px-5 py-20 md:py-24">
      {Array.isArray(faqData) && faqData.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      <div className="scroll-in container mx-auto max-w-3xl px-6">
        
        {/* Fejléc */}
        <div className="text-center mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('questions.eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold tracking-tight text-[#102a2d] md:text-5xl">
            {t('questions.title')}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-orange-700" />
        </div>

        {/* Harmonika lista */}
        <div className="space-y-4">
          {Array.isArray(faqData) &&
            faqData.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#dfe7e1] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between rounded-2xl p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-700"
                  >
                    <span className="pr-4 font-poppins text-lg font-bold text-[#102a2d] md:text-xl">
                      {item.question}
                    </span>

                    {/* Animált nyíl ikon */}
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4ef] text-[#0f766e] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-orange-700 text-white' : ''
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Nyíló/záródó válasz szekció CSS grid animációval */}
                  <div
                    id={contentId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-[#dfe7e1] px-6 pb-6 pt-4 font-poppins text-base leading-relaxed text-[#315b5d] md:text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};

export default Questions;