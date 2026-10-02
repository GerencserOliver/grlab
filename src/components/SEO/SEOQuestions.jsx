import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SEOQuestions = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dinamikus lekérés: ha a JSON-ban objektumként ({ "1": {...}, "2": {...} })
  // vagy tömbként van megadva, mindkét esetet biztonságosan kezeli.
  const rawQuestions = t('seoQuestions.questions', { returnObjects: true }) || {};
  const faqData = Array.isArray(rawQuestions)
    ? rawQuestions
    : Object.values(rawQuestions);

  // SEO Schema (JSON-LD) strukturált adatok generálása a Google kereső számára
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-gray-50 py-20 md:py-32">
      {/* SEO Structured Data beágyazás */}
      {faqData.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="scroll-in container mx-auto max-w-3xl px-6">
        
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-poppins text-gray-900 tracking-tight">
            {t('seoQuestions.heading')}
          </h2>
          <div className="mt-4 h-1.5 w-20 bg-teal-600 rounded-full mx-auto" />
        </div>

        {/* Harmonika Lista */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `seo-faq-content-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
                >
                  <span className="text-lg md:text-xl font-bold font-poppins text-gray-900 pr-4">
                    {item.question}
                  </span>

                  {/* Forgó ikon */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-teal-600 text-white' : ''
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

                {/* Harmonika tartalom animációval */}
                <div
                  id={contentId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 font-poppins text-base md:text-lg leading-relaxed border-t border-gray-100 pt-4">
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

export default SEOQuestions;