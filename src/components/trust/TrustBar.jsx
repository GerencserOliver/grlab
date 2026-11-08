import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTag, faRocket, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

/** Slim proof strip directly under the hero: the four reasons a local SME owner says yes. */
const TrustBar = async () => {
  const t = await getTranslations('trustBar');

  const items = [
    { icon: faClock, text: t('response') },
    { icon: faTag, text: t('price') },
    { icon: faRocket, text: t('speed') },
    { icon: faGraduationCap, text: t('team') },
  ];

  return (
    <section aria-label={t('ariaLabel')} className='border-b border-line bg-white'>
      <ul className='mx-auto grid max-w-360 grid-cols-1 gap-x-8 gap-y-4 px-6 py-6 sm:grid-cols-2 md:px-10 lg:grid-cols-4'>
        {items.map((item) => (
          <li key={item.text} className='flex items-center gap-3 text-sm font-semibold text-ink md:text-base'>
            <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-tint text-brand-700'>
              <FontAwesomeIcon icon={item.icon} aria-hidden='true' />
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrustBar;
