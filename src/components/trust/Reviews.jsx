import { getLocale, getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { REVIEWS } from '../../../content/reviews';
import { GOOGLE_PROFILE_URL } from '../../lib/business';

/**
 * Real Google reviews as visible quotes (deliberately no Review/AggregateRating schema:
 * self-published reviews are not eligible for rich results).
 */
const Reviews = async () => {
  const [t, locale] = await Promise.all([getTranslations('reviews'), getLocale()]);
  const [open, close] = locale === 'en' ? ['\u201c', '\u201d'] : ['\u201e', '\u201d'];

  return (
    <section className='bg-ink' aria-labelledby='reviews-heading'>
      <div className='container mx-auto max-w-360 px-6 py-20 md:px-10 md:py-24'>
        <div className='scroll-in max-w-3xl text-white'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-300'>{t('eyebrow')}</p>
          <h2 id='reviews-heading' className='font-poppins text-3xl font-extrabold leading-tight md:text-5xl'>{t('title')}</h2>
          <p className='mt-5 text-lg leading-relaxed text-soft md:text-xl'>{t('subtitle')}</p>
          {locale === 'en' && <p className='mt-2 text-sm text-on-dark-muted'>{t('translated')}</p>}
        </div>

        <ul className='scroll-in mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {REVIEWS.map((review) => (
            <li key={review.id}>
              <figure className='flex h-full flex-col rounded-2xl border border-line-dark bg-white/5 p-7'>
                <div className='flex items-center justify-between gap-3'>
                  <div role='img' aria-label={t('stars', { count: review.rating })} className='flex gap-1 text-brand-green-500'>
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} aria-hidden='true' />
                    ))}
                  </div>
                  <span className='text-xs font-semibold uppercase tracking-wider text-on-dark-muted'>{t('source')}</span>
                </div>
                <blockquote className='mt-5 flex-1 text-lg leading-relaxed text-soft'>
                  {open}{review.quote[locale] ?? review.quote.hu}{close}
                </blockquote>
                <figcaption className='mt-6 border-t border-line-dark pt-4'>
                  <span className='block font-poppins text-base font-bold text-white'>{review.name}</span>
                  <span className='text-sm text-on-dark-muted'>{t(`projects.${review.projectKey}`)}</span>
                </figcaption>
              </figure>
            </li>
          ))}
          <li>
            <div className='flex h-full flex-col justify-between rounded-2xl bg-linear-to-br from-brand-700 to-brand-green-700 p-7 text-white'>
              <div>
                <h3 className='font-poppins text-2xl font-extrabold leading-tight'>{t('googleTitle')}</h3>
                <p className='mt-3 text-lg leading-relaxed'>{t('googleText')}</p>
              </div>
              <a
                href={GOOGLE_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-poppins text-base font-bold text-ink transition-colors hover:bg-soft'
              >
                {t('googleButton')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
