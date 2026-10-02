import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartLine, faFileCode, faUserShield, faSitemap, faPenFancy } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const { t } = useTranslation(); // Initialize translation function

  const services = [
    {
      key: 'seoStrategy',
      icon: faSearch,
    },
    {
      key: 'keywordResearch',
      icon: faChartLine,
    },
    {
      key: 'onPageOptimization',
      icon: faFileCode,
    },
    {
      key: 'technicalSeo',
      icon: faUserShield,
    },
    {
      key: 'linkBuilding',
      icon: faSitemap,
    },
    {
      key: 'contentMarketing',
      icon: faPenFancy,
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="container mx-auto flex max-w-[1440px] flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="scroll-in max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('SEOservices.eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('SEOservices.heading')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">{t('SEOservices.description')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.key} className="group min-h-64 rounded-2xl border border-[#dfe7e1] bg-[#f5f7f4] p-7 transition-colors duration-300 hover:bg-[#102a2d]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#dce9df] transition-colors group-hover:bg-orange-700">
                <FontAwesomeIcon icon={service.icon} className="text-xl text-[#0f766e] group-hover:text-white" />
              </div>
              <p className="mt-7 text-sm font-bold text-orange-700 group-hover:text-orange-300">0{index + 1}</p>
              <h3 className="mt-2 font-poppins text-2xl font-bold text-[#102a2d] group-hover:text-white">
                {t(`SEOservices.${service.key}.name`)}
              </h3>
              <p className="mt-3 font-poppins text-base leading-relaxed text-[#315b5d] group-hover:text-[#dce9df]">
                {t(`SEOservices.${service.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
