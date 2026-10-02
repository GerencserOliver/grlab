import { Link, useLocation } from 'react-router-dom';
import logo from '../images/GR website design and seo logo.png';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const links = [
  { key: 'website', href: '/website' },
  { key: 'seo', href: '/seo' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <nav className='sticky top-0 z-50 w-full border-b border-[#dfe7e1] bg-white/95 px-5 backdrop-blur md:px-10' aria-label={t('nav.ariaLabel')}>
      <div className='mx-auto flex h-24 max-w-[1440px] items-center justify-between'>
        <Link to='/' aria-label={t('nav.home')}>
          <img src={logo} alt='GRLab' className='w-16' />
        </Link>

        <button
          type='button'
          onClick={() => setIsOpen((open) => !open)}
          className='rounded-lg p-3 text-[#102a2d] focus:outline-none focus:ring-2 focus:ring-orange-700 md:hidden'
          aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={isOpen}
          aria-controls='mobile-navigation'
        >
          <span className='text-2xl' aria-hidden='true'>{isOpen ? '×' : '☰'}</span>
        </button>

        <div className='hidden items-center gap-2 md:flex'>
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={`rounded-lg px-4 py-3 font-poppins text-sm font-semibold transition-colors ${location.pathname === link.href ? 'bg-[#102a2d] text-white' : 'text-[#102a2d] hover:bg-[#eef4ef]'}`}
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <div className='ml-4 flex gap-1 rounded-lg bg-[#eef4ef] p-1' aria-label={t('nav.languageLabel')}>
            <button type='button' onClick={() => changeLanguage('hu')} className={`rounded-md px-3 py-2 text-xs font-bold ${i18n.language === 'hu' ? 'bg-white text-[#102a2d] shadow-sm' : 'text-[#315b5d]'}`}>HU</button>
            <button type='button' onClick={() => changeLanguage('en')} className={`rounded-md px-3 py-2 text-xs font-bold ${i18n.language === 'en' ? 'bg-white text-[#102a2d] shadow-sm' : 'text-[#315b5d]'}`}>EN</button>
          </div>
        </div>

        <div id='mobile-navigation' className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-24 w-full flex-col gap-2 border-b border-[#dfe7e1] bg-white p-5 shadow-lg md:hidden`}>
          <Link to='/' className='rounded-lg px-4 py-3 font-semibold text-[#102a2d]'>{t('nav.home')}</Link>
          {links.map((link) => (
            <Link key={link.key} to={link.href} className='rounded-lg px-4 py-3 font-semibold text-[#102a2d]'>{t(`nav.${link.key}`)}</Link>
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

export default Navbar
