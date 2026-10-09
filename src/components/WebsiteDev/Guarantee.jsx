import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComments, faLifeRing } from '@fortawesome/free-solid-svg-icons';
import Office from '../../images/Laptop in an office illustrating website development.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Guarantee = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center bg-[#102a2d] md:flex-row">
      <div className="scroll-in order-2 container mx-auto flex flex-col p-8 text-white md:order-2 md:w-1/2 md:items-start md:px-16 md:py-20">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">{t('guarantee.eyebrow')}</p>
        <h2 className="mb-6 mt-6 font-poppins text-3xl font-extrabold leading-tight text-white md:mt-0 md:text-left md:text-5xl">
          {t('guarantee.title')}
        </h2>
        <p className="mb-6 font-poppins text-lg leading-relaxed text-[#dce9df] md:text-left md:text-xl">
          {t('guarantee.description')}
        </p>
        <ul className="mt-2 grid w-full gap-3 text-sm text-[#dce9df] sm:grid-cols-3 md:text-base">
          {t('guarantee.points', { returnObjects: true }).map((point, index) => (
            <li key={point} className="flex flex-col gap-2 rounded-xl border border-[#426b6b] p-3">
              <FontAwesomeIcon icon={[faCheck, faComments, faLifeRing][index]} className="text-orange-300" />
              <span className="hyphens-auto text-center">{point}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="mt-8 w-full rounded-full bg-orange-700 px-7 py-4 text-center font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 sm:w-auto">
          {t('guarantee.button')}
        </Link>
      </div>

      <div className="scroll-in order-1 h-72 w-full overflow-hidden sm:h-96 md:order-1 md:h-[560px] md:w-1/2">
        <img src={Office} alt={t('guarantee.imageAlt')} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default Guarantee;
