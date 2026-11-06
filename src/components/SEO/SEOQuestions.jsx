"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import JsonLd from '../JsonLd';
import { BUSINESS } from '../../lib/business';

const SEOQuestions = () => {
  const t = useTranslations('seoQuestions');
  const tc = useTranslations('cta');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rawQuestions = t.raw('questions');
  const faqData = Array.isArray(rawQuestions) ? rawQuestions : Object.values(rawQuestions || {});

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
    <section className="bg-surface-alt py-20 md:py-24">
      {faqData.length > 0 && <JsonLd data={faqSchema} />}
      <div className="scroll-in container mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            {t('heading')}
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand-700" />
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `seo-faq-content-${index}`;
            const buttonId = `seo-faq-button-${index}`;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between rounded-2xl p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  >
                    <span className="pr-4 font-poppins text-lg font-bold text-ink md:text-xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-tint text-brand-green-700 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-brand-700 text-white' : ''
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line px-6 pb-6 pt-4 font-poppins text-base leading-relaxed text-ink-muted md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-base text-ink-muted">
          {tc('phonePrompt')}{' '}
          <a
            href={BUSINESS.phoneHref}
            className="font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900"
          >
            {tc('phoneAction')} {BUSINESS.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
};

export default SEOQuestions;
