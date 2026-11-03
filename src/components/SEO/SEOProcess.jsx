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

// Icons follow the meaning of each step (5 = Google Business Profile, 6 = ongoing content work).
const STEP_ICONS = {
  1: faChartLine,
  2: faSearch,
  3: faFileAlt,
  4: faCogs,
  5: faLink,
  6: faPenNib,
  7: faChartBar,
  8: faRedo,
};

const SEOProcess = async () => {
  const t = await getTranslations('seoProcess');

  const steps = Object.entries(STEP_ICONS).map(([number, icon]) => ({
    number,
    icon,
    title: t(`steps.${number}.title`),
    description: t(`steps.${number}.description`),
  }));

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
        {/* An ordered list: the process is a sequence, which assistive tech and search engines can now read as one. */}
        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="flex flex-col items-start rounded-2xl border border-[#dfe7e1] bg-[#f5f7f4] p-7 transition-shadow duration-300 hover:shadow-lg">
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="text-orange-700"
                aria-hidden="true"
              />
              <h3 className="mt-6 font-poppins text-2xl font-bold text-[#102a2d]">
                {step.title}
              </h3>
              <p className="mt-4 font-poppins text-base leading-relaxed text-[#315b5d]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SEOProcess;
