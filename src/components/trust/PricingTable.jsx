import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ResponseGuarantee from './ResponseGuarantee';
import { PACKAGES, MAINTENANCE } from '../../../content/pricing';

// Explicit grouping: Intl's hu-HU locale does not group 4-digit numbers (9900), which would
// read inconsistently next to 79 900. A non-breaking space keeps 'Ft' and the digits together.
const formatPrice = (price, locale) =>
  String(price).replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'en' ? ',' : '\u00a0');

/**
 * "Kezdőárak" – transparent starting prices (GROSS, VAT included) with delivery time.
 * Prices come from content/pricing.js, text from messages/trust.<locale>.json.
 */
const PricingTable = async () => {
  const [t, tp, locale] = await Promise.all([
    getTranslations('pricing'),
    getTranslations('promise'),
    getLocale(),
  ]);

  const maintenanceFeatures = t.raw(`items.${MAINTENANCE.id}.features`);

  return (
    <section id='pricing' className='scroll-mt-28 bg-surface-alt' aria-labelledby='pricing-heading'>
      <div className='container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24'>
        <div className='scroll-in max-w-3xl'>
          <p className='mb-4 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>
            {t('eyebrow')}
            <span className='rounded-full bg-brand-700 px-3 py-1 text-xs tracking-wider text-white'>{t('grossBadge')}</span>
          </p>
          <h2 id='pricing-heading' className='font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl'>
            {t('title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-ink-muted md:text-xl'>{t('subtitle')}</p>
          <p className='mt-3 text-sm font-semibold text-ink-muted'>{t('grossNote')}</p>
        </div>

        <ul className='scroll-in mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {PACKAGES.map((pkg) => {
            const dark = Boolean(pkg.highlighted);
            const name = t(`items.${pkg.id}.name`);
            const features = t.raw(`items.${pkg.id}.features`);
            return (
              <li key={pkg.id}>
                <article
                  className={`flex h-full flex-col rounded-3xl border p-7 transition-shadow hover:shadow-xl ${
                    dark ? 'border-brand-green-700 bg-ink text-white' : 'border-line bg-white text-ink'
                  }`}
                >
                  <h3 className='font-poppins text-xl font-bold leading-snug md:text-2xl'>{name}</h3>
                  <p className={`mt-2 text-base leading-relaxed ${dark ? 'text-soft' : 'text-ink-muted'}`}>
                    {t(`items.${pkg.id}.description`)}
                  </p>

                  <p className={`mt-6 text-xs font-bold uppercase tracking-[0.14em] ${dark ? 'text-brand-300' : 'text-brand-700'}`}>
                    {t('from')}
                  </p>
                  <p className='font-poppins text-4xl font-extrabold leading-tight'>
                    {formatPrice(pkg.price, locale)}{' '}
                    <span className='text-lg font-bold'>{t('currency')}</span>
                  </p>
                  <p className={`text-xs font-semibold ${dark ? 'text-on-dark-muted' : 'text-ink-muted'}`}>{t('gross')}</p>

                  <p
                    className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${
                      dark ? 'bg-white/10 text-white' : 'bg-surface-tint text-ink'
                    }`}
                  >
                    <FontAwesomeIcon icon={faClock} aria-hidden='true' />
                    {t('deliveryLabel')}: {t(`items.${pkg.id}.delivery`)}
                  </p>

                  <ul className='mt-6 flex-1 space-y-2'>
                    {Array.isArray(features) &&
                      features.map((feature) => (
                        <li key={feature} className={`flex items-start gap-2 text-sm leading-relaxed md:text-base ${dark ? 'text-soft' : 'text-ink-body'}`}>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={`mt-1 shrink-0 ${dark ? 'text-brand-green-400' : 'text-brand-green-700'}`}
                            aria-hidden='true'
                          />
                          {feature}
                        </li>
                      ))}
                  </ul>

                  <Link
                    href='/contact'
                    aria-label={`${t('requestQuote')}: ${name}`}
                    className='mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-700 px-6 py-3 font-poppins text-base font-bold text-white transition-colors hover:bg-brand-800'
                  >
                    {t('requestQuote')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>

        <div className='scroll-in mt-5 flex flex-col gap-5 rounded-3xl border border-line bg-white p-7 md:flex-row md:items-center md:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-xs font-bold uppercase tracking-[0.14em] text-brand-700'>{t('maintenanceEyebrow')}</p>
            <h3 className='mt-1 font-poppins text-xl font-bold text-ink md:text-2xl'>{t(`items.${MAINTENANCE.id}.name`)}</h3>
            <p className='mt-2 leading-relaxed text-ink-muted'>{t(`items.${MAINTENANCE.id}.description`)}</p>
            <ul className='mt-3 flex flex-wrap gap-x-5 gap-y-1'>
              {Array.isArray(maintenanceFeatures) &&
                maintenanceFeatures.map((feature) => (
                  <li key={feature} className='flex items-center gap-2 text-sm text-ink-body'>
                    <FontAwesomeIcon icon={faCheck} className='text-brand-green-700' aria-hidden='true' />
                    {feature}
                  </li>
                ))}
            </ul>
          </div>
          <div className='md:text-right'>
            <p className='font-poppins text-4xl font-extrabold text-ink'>
              {formatPrice(MAINTENANCE.price, locale)}{' '}
              <span className='text-lg font-bold'>{t('currency')} {t('perMonth')}</span>
            </p>
            <p className='text-xs font-semibold text-ink-muted'>{t('gross')}</p>
          </div>
        </div>

        <div className='scroll-in mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
          <div>
            <ResponseGuarantee text={tp('response')} />
            <p className='mt-1 max-w-2xl text-sm text-ink-muted'>{t('quoteNote')}</p>
          </div>
          <Link
            href='/contact'
            className='inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-ink px-7 py-3 font-poppins text-base font-bold text-ink transition-colors hover:bg-ink hover:text-white md:w-auto'
          >
            {t('requestQuote')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
