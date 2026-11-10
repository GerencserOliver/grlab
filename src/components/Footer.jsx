"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../images/grlab_nav_logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { BUSINESS, PRIVACY_PATH, SOCIAL } from '../lib/business';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'blog', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

const Footer = () => {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const tp = useTranslations('privacy');
  const tb = useTranslations('blog');
  const ta = useTranslations('about');
  const ts = useTranslations('social');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const label = (key) => (key === 'blog' ? tb('navLabel') : key === 'about' ? ta('navLabel') : t(key));
  const isActive = (href) => pathname === href || (href === '/blog' && pathname?.startsWith('/blog/'));

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <footer className="w-full border-t border-line bg-surface-alt text-ink">
      <div className="mx-auto max-w-360 px-5 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-start">
            <Link href="/" aria-label={t('home')}>
              <Image
                src={Logo}
                alt={t('logoAlt')}
                className="h-auto w-20 hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          <nav aria-label={tf('navLabel')}>
            <ul className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-lg px-4 py-2.5 font-poppins text-sm font-semibold transition-colors ${
                        active
                          ? 'bg-ink text-white'
                          : 'text-ink hover:bg-surface-tint'
                      }`}
                    >
                      {label(link.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className="flex w-fit gap-1 rounded-lg bg-surface-tint p-1 border border-line"
            role="group"
            aria-label={t('languageLabel')}
          >
            <button
              type="button"
              onClick={() => changeLanguage('hu')}
              aria-pressed={locale === 'hu'}
              lang="hu"
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === 'hu'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              HU
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              aria-pressed={locale === 'en'}
              lang="en"
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === 'en'
                  ? 'bg-white text-ink shadow-sm'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              EN
            </button>
          </div>
        </div>
        <hr className="my-8 border-t border-line" />
        <div className="flex flex-col-reverse gap-6 items-center justify-between md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-poppins text-sm font-bold text-brand-green-700">
              © {currentYear} GRLab. {tf('rights')}
            </p>
            <p className="font-poppins text-xs text-ink-muted mt-1">
              {tf('tagline')}
            </p>
            <p className="mt-2 font-poppins text-xs">
              <Link
                href={PRIVACY_PATH}
                aria-current={pathname === PRIVACY_PATH ? 'page' : undefined}
                className="font-semibold text-ink-muted underline underline-offset-4 transition-colors hover:text-brand-700"
              >
                {tp('linkLabel')}
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-surface-tint px-4 text-sm font-bold text-ink transition-all hover:bg-ink hover:text-white"
              aria-label={`${tf('callLabel')}: ${BUSINESS.phoneDisplay}`}
            >
              <FontAwesomeIcon icon={faPhone} className="h-4 w-4" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.emailHref}
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-tint text-ink transition-all hover:bg-ink hover:text-white"
              aria-label={tf('emailLabel')}
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-tint font-poppins text-base font-extrabold text-ink transition-all hover:bg-ink hover:text-white"
              aria-label={ts('linkedin')}
            >
              <span aria-hidden="true">in</span>
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-tint font-poppins text-lg font-extrabold text-ink transition-all hover:bg-ink hover:text-white"
              aria-label={ts('facebook')}
            >
              <span aria-hidden="true">f</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
