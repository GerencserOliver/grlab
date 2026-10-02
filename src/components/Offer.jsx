import React from 'react';
import Laptop from '../images/Laptop for Offering.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Offer = () => {
  const { t } = useTranslation();

  return (
    <section className='mt-8 flex flex-col items-center justify-center bg-[#102a2d] md:min-h-[560px] md:flex-row'>
      {/* Szöveges rész */}
      <div className='scroll-in container mx-auto order-2 flex flex-col items-center p-8 text-white md:order-1 md:w-1/2 md:items-start md:px-16'>
        <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-300'>{t('offer.eyebrow')}</p>
        <h2 className='mb-6 mt-6 font-poppins text-3xl font-extrabold leading-tight text-white md:mt-0 md:text-left md:text-5xl'>
          {t('offer.header')}
        </h2>
        <p className='mb-6 font-poppins text-lg leading-relaxed text-[#dce9df] md:text-left md:text-xl'>
          {t('offer.description')}
        </p>
        <Link to='/contact' className='mt-4 w-full rounded-full bg-orange-700 px-7 py-4 text-center font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 sm:w-auto'>{t('offer.button')}</Link>
      </div>

      {/* Kép rész */}
      <div className='scroll-in order-1 h-72 w-full sm:h-96 md:order-2 md:h-[560px] md:w-1/2'>
        <img src={Laptop} alt={t('offer.imageAlt')} loading='lazy' className='h-full w-full object-cover' />
      </div>
    </section>
  );
};

export default Offer;
