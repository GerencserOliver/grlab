import heroImg from '../images/Woman working on laptop illustrating website development.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations, getMessages } from 'next-intl/server';

const Hero = async () => {
  const t = await getTranslations('hero');
  const messages = await getMessages();
  const proofPoints = messages?.hero?.proofPoints || [];

  return (
    <section className='border-b border-[#dfe7e1] bg-[#f5f7f4]'>
      <div className='container mx-auto flex max-w-360 flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-10 md:py-24'>
        <div className='scroll-in w-full md:w-3/5 text-left'>
          <p className='mb-6 text-sm font-bold uppercase tracking-[0.18em] text-orange-700 md:text-base'>
            {t('subtitle')}
          </p>
          <h1 className='mb-6 font-poppins text-4xl font-extrabold leading-[1.05] text-[#102a2d] sm:text-5xl md:text-7xl'>
            {t('title')}
          </h1>
          <p className='mb-8 max-w-3xl font-poppins text-lg leading-relaxed text-[#315b5d] sm:text-xl md:text-2xl'>
            {t('description')}
          </p>
          <div className='flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start'>
            <Link href='/contact' className='inline-flex w-full items-center justify-center gap-3 rounded-full bg-orange-700 px-7 py-4 font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 sm:w-auto'>
              {t('button_text')} <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <Link href='/portfolio' className='px-5 py-4 font-bold text-[#102a2d] transition-colors hover:text-orange-700'>
              {t('secondaryButton')}
            </Link>
          </div>
          <div className='mt-6 flex flex-wrap gap-4'>
            {Array.isArray(proofPoints) &&
              proofPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-[#102a2d]">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-700" />
                  {point}
                </span>
              ))}
          </div>
        </div>
        <div className='scroll-in relative w-full md:w-2/5'>
          <div className='absolute -inset-3 rotate-3 rounded-4xl bg-[#dce9df]' aria-hidden='true'></div>
          <Image src={heroImg} alt={t('imageAlt')} className='relative aspect-4/3 w-full rounded-3xl object-cover shadow-2xl' />
          <div className='absolute -bottom-5 left-5 right-5 rounded-xl bg-[#102a2d] px-5 py-4 text-white shadow-xl'>
            <p className='text-xs font-bold uppercase tracking-widest text-orange-300'>{t('cardLabel')}</p>
            <p className='mt-1 font-poppins text-base md:text-lg'>{t('cardText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
