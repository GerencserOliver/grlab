"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../images/GR-website-design-and-seo-logo.webp';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-[#dfe7e1] bg-white/95 px-5 backdrop-blur md:px-10' aria-label={t('ariaLabel')}>
      <div className='mx-auto flex h-24 max-w-360 items-center justify-between'>
        <Link href='/' aria-label={t('home')}>
          <Image src={logo} alt='GRLab' className='w-16' fetchPriority='high' loading="eager" />
        </Link>
        <button
          type='button'
          onClick={() => setIsOpen((open) => !open)}
          className='rounded-lg p-3 text-[#102a2d] focus:outline-none focus:ring-2 focus:ring-orange-700 md:hidden'
          aria-label={isOpen ? t('closeMenu') : t('openMenu')}
          aria-expanded={isOpen}
          aria-controls='mobile-navigation'
        >
          <span className='text-2xl' aria-hidden='true'>{isOpen ? '×' : '☰'}</span>
        </button>
        <div className='hidden items-center gap-2 md:flex'>
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`rounded-lg px-4 py-3 font-poppins text-sm font-semibold transition-colors ${pathname === link.href ? 'bg-[#102a2d] text-white' : 'text-[#102a2d] hover:bg-[#eef4ef]'}`}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className='ml-4 flex gap-1 rounded-lg bg-[#eef4ef] p-1' aria-label={t('languageLabel')}>
            <button type='button' onClick={() => changeLanguage('hu')} className={`rounded-md px-3 py-2 text-xs font-bold ${locale === 'hu' ? 'bg-white text-[#102a2d] shadow-sm' : 'text-[#315b5d]'}`}>HU</button>
            <button type='button' onClick={() => changeLanguage('en')} className={`rounded-md px-3 py-2 text-xs font-bold ${locale === 'en' ? 'bg-white text-[#102a2d] shadow-sm' : 'text-[#315b5d]'}`}>EN</button>
          </div>
        </div>
        <div id='mobile-navigation' className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-24 w-full flex-col gap-2 border-b border-[#dfe7e1] bg-white p-5 shadow-lg md:hidden`}>
          <Link href='/' className='rounded-lg px-4 py-3 font-semibold text-[#102a2d]'>{t('home')}</Link>
          {links.map((link) => (
            <Link key={link.key} href={link.href} className='rounded-lg px-4 py-3 font-semibold text-[#102a2d]'>{t(link.key)}</Link>
          ))}
          <div className='mt-2 flex gap-2 border-t border-[#dfe7e1] pt-4'>
            <button type='button' onClick={() => changeLanguage('hu')} className='rounded-lg bg-[#eef4ef] px-4 py-2 font-bold'>HU</button>
            <button type='button' onClick={() => changeLanguage('en')} className='rounded-lg bg-[#eef4ef] px-4 py-2 font-bold'>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
