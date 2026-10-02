import React from 'react';
import { useTranslation } from 'react-i18next'; // Fordítási hook importálása
import { Link } from 'react-router-dom';
import Workspace from '../../images/workspace for website and seo.webp';

const Rivals = () => {
  const { t } = useTranslation(); // Fordítás funkció inicializálása

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-zinc-900 md:h-[80vh]">
      {/* Szöveges rész */}
      <div className="scroll-in text-black container mx-auto p-8 md:px-16 flex flex-col items-center md:items-start md:w-1/2 order-2">
        <h2 className="text-white font-extrabold font-poppins text-3xl md:text-5xl mb-6 md:text-left md:mt-0 mt-12">
          {t('rivals.heading')}
        </h2>
        <p className="text-teal-700 font-poppins text-xl md:text-2xl mb-6 md:text-left">
          {t('rivals.description')}
        </p>
        <button className="bg-orange-700 hover:bg-gray-800 text-white text-base sm:text-lg md:text-xl font-bold font-poppins px-6 py-3 mt-4 rounded-3xl w-full sm:w-auto mb-16 md:mb-0">
          <Link to="/contact">{t('rivals.cta')}</Link>
        </button>
      </div>

      {/* Kép rész */}
      <div className="scroll-in w-full md:w-1/2 h-64 sm:h-96 md:h-full md:mt-0 order-1">
        <img src={Workspace} alt="
          Illustrating the proven results of our SEO services
        " className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Rivals;
