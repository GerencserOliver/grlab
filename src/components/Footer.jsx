"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../images/GR-website-design-and-seo-logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'contact', href: '/contact' },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = useLocale();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const changeLanguage = (newLocale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <footer className="w-full border-t border-[#dfe7e1] bg-[#f8faf8] text-[#102a2d]">
      <div className="mx-auto max-w-360 px-5 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:justify-start">
            <Link href="/" aria-label={t('home')}>
              <Image
                src={Logo}
                alt="GRLab logo – Website Design and SEO Optimization Services"
                className="w-20 hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={`rounded-lg px-4 py-2.5 font-poppins text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#102a2d] text-white'
                          : 'text-[#102a2d] hover:bg-[#eef4ef]'
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className="flex w-fit gap-1 rounded-lg bg-[#eef4ef] p-1 border border-[#dfe7e1]"
            aria-label={t('languageLabel')}
          >
            <button
              type="button"
              onClick={() => changeLanguage('hu')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === 'hu'
                  ? 'bg-white text-[#102a2d] shadow-sm'
                  : 'text-[#315b5d] hover:text-[#102a2d]'
              }`}
            >
              HU
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                locale === 'en'
                  ? 'bg-white text-[#102a2d] shadow-sm'
                  : 'text-[#315b5d] hover:text-[#102a2d]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
        <hr className="my-8 border-t border-[#dfe7e1]" />
        <div className="flex flex-col-reverse gap-6 items-center justify-between md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-poppins text-sm font-bold text-[#0f766e]">
              © {currentYear} GRLab. All rights reserved.
            </p>
            <p className="font-poppins text-xs text-[#315b5d] mt-1">
              Designed with passion for your success.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@grlab.hu"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4ef] text-[#102a2d] transition-all hover:bg-[#102a2d] hover:text-white"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
