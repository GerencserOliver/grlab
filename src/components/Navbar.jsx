"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../images/grlab_nav_logo.webp';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { BUSINESS } from '../lib/business';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'blog', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const tb = useTranslations('blog');
  const ta = useTranslations('about');
  const locale = useLocale();
  const callLabel = `${t('callUs')}: ${BUSINESS.phoneDisplay}`;

  const label = (key) => (key === 'blog' ? tb('navLabel') : key === 'about' ? ta('navLabel') : t(key));
  // The Blog item stays highlighted on individual posts (/blog/<slug>) too.
  const isActive = (href) => pathname === href || (href === '/blog' && pathname?.startsWith('/blog/'));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-line bg-white/95 px-5 backdrop-blur md:px-10'>
      <nav className='mx-auto flex h-24 max-w-360 items-center justify-between' aria-label={t('ariaLabel')}>
        <Link href='/' aria-label={t('home')}>
          <Image src={logo} alt={t('logoAlt')} className='h-auto w-16' fetchPriority='high' loading="eager" />
        </Link>
        <div className='flex items-center gap-1 lg:hidden'>
          <a
            href={BUSINESS.phoneHref}
            aria-label={callLabel}
            className='flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300'
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden='true' />
          </a>
          <button
            type='button'
            onClick={() => setIsOpen((open) => !open)}
            className='rounded-lg p-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand-700'
            aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
          >
            <span className='text-2xl' aria-hidden='true'>{isOpen ? '×' : '☰'}</span>
          </button>
        </div>
        <div className='hidden items-center gap-1 lg:flex xl:gap-2'>
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={`rounded-lg px-2.5 py-3 font-poppins text-sm font-semibold transition-colors lg:px-4 ${isActive(link.href) ? 'bg-ink text-white' : 'text-ink hover:bg-surface-tint'}`}
            >
              {label(link.key)}
            </Link>
          ))}
          <a
            href={BUSINESS.phoneHref}
            aria-label={callLabel}
            className='ml-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-700 px-3 text-sm font-bold text-white transition-colors hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300 xl:px-5'
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden='true' />
            <span className='hidden xl:inline'>{BUSINESS.phoneDisplay}</span>
          </a>
          <div className='ml-2 flex gap-1 rounded-lg bg-surface-tint p-1 lg:ml-3' role='group' aria-label={t('languageLabel')}>
            <button type='button' onClick={() => changeLanguage('hu')} aria-pressed={locale === 'hu'} lang='hu' className={`rounded-md px-3 py-2 text-xs font-bold ${locale === 'hu' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted'}`}>HU</button>
            <button type='button' onClick={() => changeLanguage('en')} aria-pressed={locale === 'en'} lang='en' className={`rounded-md px-3 py-2 text-xs font-bold ${locale === 'en' ? 'bg-white text-ink shadow-sm' : 'text-ink-muted'}`}>EN</button>
          </div>
        </div>
        <div id='mobile-navigation' className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-24 w-full flex-col gap-2 border-b border-line bg-white p-5 shadow-lg lg:hidden`}>
          <Link href='/' aria-current={pathname === '/' ? 'page' : undefined} className='rounded-lg px-4 py-3 font-semibold text-ink'>{t('home')}</Link>
          {links.map((link) => (
            <Link key={link.key} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className='rounded-lg px-4 py-3 font-semibold text-ink'>{label(link.key)}</Link>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className='mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-brand-700 px-6 py-4 font-bold text-white transition-colors hover:bg-brand-800'
          >
            <FontAwesomeIcon icon={faPhone} aria-hidden='true' />
            {callLabel}
          </a>
          <div className='mt-2 flex gap-2 border-t border-line pt-4' role='group' aria-label={t('languageLabel')}>
            <button type='button' onClick={() => changeLanguage('hu')} aria-pressed={locale === 'hu'} lang='hu' className='rounded-lg bg-surface-tint px-4 py-2 font-bold'>HU</button>
            <button type='button' onClick={() => changeLanguage('en')} aria-pressed={locale === 'en'} lang='en' className='rounded-lg bg-surface-tint px-4 py-2 font-bold'>EN</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
