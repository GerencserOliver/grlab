import Laptop from '../images/Laptop for price.webp';
import Office from '../images/Website Design & Development.webp';
import Buildings from '../images/UX Design & Optimization.webp';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Prices = () => {
  const { t } = useTranslation();

  const packages = [
    {
      image: Laptop,
      name: t('prices.packages.seo.name'),
      description: t('prices.packages.seo.description'),
    },
    {
      image: Office,
      name: t('prices.packages.website.name'),
      description: t('prices.packages.website.description'),
    },
    {
      image: Buildings,
      alt: 'UX Design',
      name: t('prices.packages.ux.name'),
      description: t('prices.packages.ux.description'),
    },
  ];

  return (
    <section className='flex items-center justify-center bg-[#f5f7f4]'>
      <div className='container mx-auto flex max-w-[1440px] flex-col px-6 py-20 md:px-10 md:py-24'>
        <div className='scroll-in max-w-3xl'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>{t('prices.eyebrow')}</p>
          <h2 className='font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl'>
            {t('prices.header.title')}
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl'>
            {t('prices.header.subtitle')}
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-5 scroll-in md:grid-cols-3'>
          {packages.map((pkg) => (
            <article key={pkg.name} className='group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dfe7e1] bg-white transition-shadow hover:shadow-xl'>
              <img src={pkg.image} alt={pkg.name} loading='lazy' className='aspect-[16/9] w-full object-cover' />
              <div className='flex flex-1 flex-col p-7'>
              <h3 className='font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl'>
                {pkg.name}
              </h3>
              <p className='mt-4 flex-1 font-poppins text-base leading-relaxed text-[#315b5d]'>
                {pkg.description}
              </p>
              <div className='mt-7'>
                <Link to='/website' className='inline-flex w-full justify-center rounded-full bg-orange-700 px-5 py-3 font-poppins font-bold text-white transition-colors hover:bg-orange-800'>{t('prices.button_text')}</Link>
              </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
