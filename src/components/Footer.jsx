import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/GR website design and seo logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <footer className="w-full border-t border-[#dfe7e1] bg-[#f8faf8] text-[#102a2d]">
      <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-14">
        
        {/* Felső sáv: Logó, Navigáció és Nyelvválasztó */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand & Logo */}
          <div className="flex items-center justify-between md:justify-start">
            <Link to="/" aria-label={t('nav.home')}>
              <img
                src={Logo}
                alt="GRLab logo – Website Design and SEO Optimization Services"
                className="w-20 hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Navigációs Linkek */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className={`rounded-lg px-4 py-2.5 font-poppins text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#102a2d] text-white'
                          : 'text-[#102a2d] hover:bg-[#eef4ef]'
                      }`}
                    >
                      {t(`nav.${link.key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Nyelvválasztó (Navbar stílus) */}
          <div
            className="flex w-fit gap-1 rounded-lg bg-[#eef4ef] p-1 border border-[#dfe7e1]"
            aria-label={t('nav.languageLabel')}
          >
            <button
              type="button"
              onClick={() => changeLanguage('hu')}
              className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition-all ${
                i18n.language === 'hu'
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
                i18n.language === 'en'
                  ? 'bg-white text-[#102a2d] shadow-sm'
                  : 'text-[#315b5d] hover:text-[#102a2d]'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Elválasztó vonal */}
        <hr className="my-8 border-t border-[#dfe7e1]" />

        {/* Alsó sáv: Copyright & Közösségi Média */}
        <div className="flex flex-col-reverse gap-6 items-center justify-between md:flex-row">
          
          {/* Copyright Szöveg */}
          <div className="text-center md:text-left">
            <p className="font-poppins text-sm font-bold text-[#0f766e]">
              © {currentYear} GRLab. All rights reserved.
            </p>
            <p className="font-poppins text-xs text-[#315b5d] mt-1">
              Designed with passion for your success.
            </p>
          </div>

          {/* Közösségi Média Gombok */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@grlab.com"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4ef] text-[#102a2d] transition-all hover:bg-[#102a2d] hover:text-white"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </a>

            {/* <a
              href="https://www.facebook.com/oliver.gerencser.5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4ef] text-[#102a2d] transition-all hover:bg-[#102a2d] hover:text-white"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/oliveerphd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef4ef] text-[#102a2d] transition-all hover:bg-[#102a2d] hover:text-white"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            </a> */}
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;