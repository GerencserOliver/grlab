import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faDraftingCompass,
  faLightbulb,
  faCode,
  faRocket,
  faLifeRing,
} from '@fortawesome/free-solid-svg-icons';
import { getTranslations } from 'next-intl/server';

const STEP_ICONS = [faHandshake, faDraftingCompass, faLightbulb, faCode, faRocket, faLifeRing];

const WebsiteBuilding = async () => {
  const t = await getTranslations('websiteBuilding');

  const steps = STEP_ICONS.map((icon, index) => ({
    icon,
    title: t(`steps.${index}.title`),
    description: t(`steps.${index}.description`),
  }));

  return (
    <section className="flex items-center justify-center bg-white">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700">{t('eyebrow')}</p>
        <h2 className="max-w-4xl font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl">
          {t('title')}
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl">
          {t('description')}
        </p>
        {/* An ordered list: the process is a sequence. */}
        <ol className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex flex-col items-start rounded-2xl border border-line bg-surface-alt p-7 transition-shadow duration-300 hover:shadow-lg"
            >
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="text-brand-700"
                aria-hidden="true"
              />
              <h3 className="mt-6 font-poppins text-2xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-4 font-poppins text-base leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WebsiteBuilding;
