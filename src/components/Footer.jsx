import React from 'react'
import Logo from '../images/GM website design and seo logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
    { name: "Website Development", href: "/website"},
    { name: "SEO", href: "/seo"},
    { name: "Portfolio", href: "/portfolio"},
    { name: "Contact", href: "/contact"},
  ]

const Footer = () => {
const currentYear = new Date().getFullYear();

const { t, i18n } = useTranslation();

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Nyelv mentése
};
  

  return (
    <footer className='items-center justify-center bg-gray-100 h-[62vh] md:h-[50vh]'>
        <div className='scroll-in flex flex-col md:flex-row text-black container mx-auto px-4'>
            <div className='md:w-1/2 md:mt-12 m-4'>
                <img src={Logo} alt='
                GM logo – Website Design and SEO Optimization Services
                ' className='w-24' />
            </div>
            <div className='md:w-1/2 md:mt-20'>
                <ul className='hidden md:flex items-center justify-end h-full ml-auto'>
                    {links.map((link) => (
                        <li key={link.name} className='text-black font-semibold text-xl font-poppins li p-2 pr-4 pl-4'>
                        <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <hr className="md:h-1 bg-teal-700 md:mx-48 mt-12 mb-12"></hr>
        <div className='flex flex-col md:flex-row text-black container mx-auto px-4'>
            <div className='md:w-2/4 md:mt-12 md:text-start text-center'>
                <h2 className='text-teal-700 font-extrabold font-poppins text-2xl mb-8 md:mb-16'>© {currentYear} GMWebDesign. All rights reserved.<br/>Designed with passion for your success.</h2>
            </div>
            <div className="md:w-1/4 flex justify-center items-center">
                <button onClick={() => changeLanguage('en')} className='mr-3 md:mb-0 mb-4 hover:bg-gray-800 bg-orange-700 p-3 pr-8 pl-8 rounded-md text-white font-poppins max-w-full'>
                    {t('english')}
                </button>
                <button onClick={() => changeLanguage('hu')} className='hover:bg-gray-800 md:mb-0 mb-4 bg-orange-700 p-3 pr-8 pl-8 rounded-md text-white font-poppins max-w-full'>
                    {t('hungarian')}
                </button>
            </div>
            <div className='md:w-1/4 flex md:flex-row md:justify-end justify-center md:mt-12'>
                <a
                    href="mailto:gmwebsitedesign@gmail.com"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3 mr-4"
                >
                    <FontAwesomeIcon icon={faEnvelope} className="text-white h-6 md:h-8" />
                </a>
                {/* Facebook Link */}
                <a
                    href="https://www.facebook.com/oliver.gerencser.5/"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3 mr-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FontAwesomeIcon icon={faFacebookF} className="text-white h-6 md:h-8" />
                </a>

                {/* Instagram Link */}
                <a
                    href="https://www.instagram.com/oliveerphd/"
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full p-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} className="text-white h-6 md:h-8" />
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
