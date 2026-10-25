import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faSearch,
  faFileAlt,
  faCogs,
  faPenNib,
  faLink,
  faChartBar,
  faRedo,
} from '@fortawesome/free-solid-svg-icons';

const SEOProcess = async () => {
  const t = await getTranslations('seoProcess');

  const steps = [
    {
      title: t('steps.1.title'),
      icon: faChartLine,
      description: t('steps.1.description'),
    },
    {
      title: t('steps.2.title'),
      icon: faSearch,
      description: t('steps.2.description'),
    },
    {
      title: t('steps.3.title'),
      icon: faFileAlt,
      description: t('steps.3.description'),
    },
    {
      title: t('steps.4.title'),
      icon: faCogs,
      description: t('steps.4.description'),
    },
    {
      title: t('steps.5.title'),
      icon: faPenNib,
      description: t('steps.5.description'),
    },
    {
      title: t('steps.6.title'),
      icon: faLink,
      description: t('steps.6.description'),
    },
    {
      title: t('steps.7.title'),
      icon: faChartBar,
      description: t('steps.7.description'),
    },
    {
      title: t('steps.8.title'),
      icon: faRedo,
      description: t('steps.8.description'),
    },
  ];

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('eyebrow')}</p>
        <h2 className="max-w-4xl font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
          {t('heading')}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#315b5d] md:text-xl">
          {t('subheading')}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={index} className="flex flex-col items-start rounded-2xl border border-[#dfe7e1] bg-[#f5f7f4] p-7 transition-shadow duration-300 hover:shadow-lg">
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="mb-4 text-orange-700"
              />
              <h3 className="mt-4 font-poppins text-2xl font-bold text-[#102a2d]">
                {step.title}
              </h3>
              <p className="mt-4 font-poppins text-base leading-relaxed text-[#315b5d]">
                {step.description}
              </p>
              <hr className="block md:hidden border-gray-300 mt-6 mb-3 w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
