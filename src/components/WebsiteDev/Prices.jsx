import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const TIERS = ['basic', 'pro', 'premium'];

// Dark cards get light text; the 'pro' card is white with dark text.
const TIER_STYLES = {
  basic: {
    card: 'border-[#0f766e] bg-[#102a2d]',
    text: 'text-white',
    bullet: 'marker:text-orange-300',
    button: 'bg-orange-700 text-white hover:bg-orange-800',
  },
  pro: {
    card: 'border-[#dfe7e1] bg-white',
    text: 'text-[#102a2d]',
    bullet: 'marker:text-orange-700',
    button: 'bg-orange-700 text-white hover:bg-orange-800',
  },
  // The teal card needs a light button: orange-700 on #0f766e is nearly invisible.
  premium: {
    card: 'border-[#102a2d] bg-[#0f766e]',
    text: 'text-white',
    bullet: 'marker:text-orange-200',
    button: 'bg-white text-[#0f766e] hover:bg-[#dce9df]',
  },
};

const Prices = async () => {
  const t = await getTranslations('wdprices');

  return (
    <section className="flex items-center justify-center bg-[#f5f7f4]">
      <div className="scroll-in container mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700">{t('eyebrow')}</p>
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl">
            {t('description')}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 scroll-in sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const styles = TIER_STYLES[tier];
            const features = t.raw(`${tier}.features`);
            const title = t(`${tier}.title`);
            return (
              <article
                key={tier}
                className={`flex h-full flex-col justify-between rounded-2xl border p-7 ${styles.card}`}
              >
                <div>
                  {/* h3: this section's own heading above is the h2 */}
                  <h3 className={`${styles.text} font-poppins text-3xl font-bold md:text-4xl`}>
                    {title}
                  </h3>
                  <hr className="mb-3 mt-3 block border-gray-300/60" />
                  <p className={`${styles.text} mb-6 font-poppins text-lg font-semibold leading-snug md:text-xl`}>
                    {t(`${tier}.description`)}
                  </p>
                  <hr className="mb-3 mt-3 block border-gray-300/60" />
                  <ul className={`list-outside list-disc pl-5 ${styles.bullet}`}>
                    {Array.isArray(features) &&
                      features.map((feature) => (
                        <li key={feature} className={`${styles.text} mt-3 font-poppins text-base md:text-lg`}>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  aria-label={`${t('requestQuote')}: ${title}`}
                  className={`mt-8 block w-full rounded-full px-6 py-3 text-center font-poppins text-base font-bold transition-colors ${styles.button}`}
                >
                  {t('requestQuote')}
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-12 font-poppins text-sm text-[#0f766e] md:text-lg">
          {t('note')}
        </p>
      </div>
    </section>
  );
};

export default Prices;
