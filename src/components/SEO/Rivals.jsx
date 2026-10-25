import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Workspace from '../../images/workspace for website and seo.webp';
import Image from 'next/image';

const Rivals = async () => {
  const t = await getTranslations('rivals');

  return (
    <section className="flex flex-col items-center justify-center bg-[#102a2d] md:flex-row">
      <div className="scroll-in container mx-auto order-2 flex flex-col p-8 md:order-1 md:w-1/2 md:items-start md:px-16 md:py-20">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">{t('eyebrow')}</p>
        <h2 className="mb-6 mt-6 font-poppins text-3xl font-extrabold leading-tight text-white md:mt-0 md:text-left md:text-5xl">
          {t('heading')}
        </h2>
        <p className="mb-6 font-poppins text-lg leading-relaxed text-[#dce9df] md:text-left md:text-xl">
          {t('description')}
        </p>
        <Link href="/contact" className="mt-4 w-full rounded-full bg-orange-700 px-7 py-4 text-center font-poppins text-base font-bold text-white transition-colors hover:bg-orange-800 sm:w-auto">
          {t('cta')}
        </Link>
      </div>
      <div className="scroll-in order-1 h-72 w-full sm:h-96 md:order-2 md:h-130 md:w-1/2">
        <Image src={Workspace} alt={t('imageAlt')} loading="lazy" className="h-full w-full object-cover" />
      </div>
    </section>
  );
};

export default Rivals;
