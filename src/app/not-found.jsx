import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import { BUSINESS } from '../lib/business';

// Static metadata: the 404 must never be indexed. The title is Hungarian, the site's primary language.
export const metadata = {
  title: { absolute: '404 – Az oldal nem található | GRLab' },
  description: 'A keresett oldal nem található. Találj vissza a GRLab weboldalára.',
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const [t, tn, tb, tc] = await Promise.all([
    getTranslations('notFound'),
    getTranslations('nav'),
    getTranslations('blog'),
    getTranslations('cta'),
  ]);

  const cards = [
    { href: '/website', title: tn('website'), text: t('cardWebsiteText') },
    { href: '/seo', title: tn('seo'), text: t('cardSeoText') },
    { href: '/portfolio', title: tn('portfolio'), text: t('cardPortfolioText') },
    { href: '/blog', title: tb('navLabel'), text: t('cardBlogText') },
  ];

  return (
    <section className='relative overflow-hidden bg-[#102a2d]'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(15,118,110,0.55),transparent_45%)]' aria-hidden='true' />
      <div className='pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,#fff_1.5px,transparent_1.5px)] bg-size-[26px_26px]' aria-hidden='true' />
      <div className='relative mx-auto flex max-w-360 flex-col px-6 py-20 md:px-10 md:py-28'>
        <p className='text-sm font-bold uppercase tracking-[0.18em] text-orange-300'>{t('eyebrow')}</p>
        <p
          aria-hidden='true'
          className='mt-4 select-none font-poppins text-[7rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.35)] sm:text-[10rem] md:text-[14rem]'
        >
          404
        </p>
        <h1 className='-mt-2 max-w-3xl font-poppins text-4xl font-extrabold leading-tight text-white md:text-6xl'>
          {t('title')}
        </h1>
        <p className='mt-6 max-w-2xl text-lg leading-relaxed text-[#dce9df] md:text-xl'>{t('text')}</p>
        <div className='mt-10 flex flex-col gap-3 sm:flex-row'>
          <Link
            href='/'
            className='inline-flex items-center justify-center gap-3 rounded-full bg-orange-700 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300'
          >
            {t('home')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
          </Link>
          <Link
            href='/contact'
            className='inline-flex items-center justify-center rounded-full border-2 border-white/40 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white'
          >
            {t('contact')}
          </Link>
        </div>

        <h2 className='mt-20 font-poppins text-xl font-bold text-white md:text-2xl'>{t('helpTitle')}</h2>
        <ul className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className='group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-orange-300/60 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-300'
              >
                <span className='flex items-center justify-between font-poppins text-lg font-bold text-white'>
                  {card.title}
                  <FontAwesomeIcon icon={faArrowRight} className='text-orange-300 transition-transform group-hover:translate-x-1' aria-hidden='true' />
                </span>
                <span className='mt-2 text-sm leading-relaxed text-[#dce9df]'>{card.text}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className='mt-12 text-sm text-[#dce9df]'>
          {t('callPrompt')}{' '}
          <a
            href={BUSINESS.phoneHref}
            className='inline-flex items-center gap-2 font-bold text-orange-300 underline decoration-orange-300/50 underline-offset-4 transition-colors hover:text-white'
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden='true' />
            {tc('phoneAction')} {BUSINESS.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
