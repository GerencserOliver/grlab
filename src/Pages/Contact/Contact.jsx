import { Helmet } from 'react-helmet'
import CTA from '../../components/CTA'
import ScrollAnimation from '../../components/ScrollAnimation'
import IntroAnimation from '../../components/IntroAnimation'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Kapcsolat | GRLab</title>
        <meta
          name='description'
          content='Beszéljük át weboldal-, webalkalmazás- vagy egyedi üzleti rendszer ötletét. Kérjen személyre szabott ajánlatot.'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.grlab.hu/contact' />
      </Helmet>
      <IntroAnimation />
      <ScrollAnimation />
      <section className='border-b border-[#dfe7e1] bg-[#f5f7f4]'>
        <div className='container mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:px-10 md:py-24'>
          <div className='scroll-in w-full md:w-2/3'>
            <p className='mb-5 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>
              {t('contact.subtitle')}
            </p>
            <h1 className='mb-5 font-poppins text-4xl font-extrabold leading-tight text-[#102a2d] sm:text-5xl md:text-7xl'>
              {t('contact.title')}
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-[#315b5d] md:text-xl'>{t('contact.description')}</p>
          </div>
          <div className='w-full rounded-2xl border border-[#c9d8cc] bg-white p-6 shadow-sm md:w-1/3'>
            <p className='text-sm font-bold uppercase tracking-widest text-orange-700'>{t('contact.cardEyebrow')}</p>
            <a href='mailto:info@grlab.com' className='mt-3 block break-all text-lg font-bold text-[#102a2d] transition-colors hover:text-orange-700'>info@grlab.hu</a>
            <p className='mt-3 text-sm leading-relaxed text-[#315b5d]'>{t('contact.cardText')}</p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}

export default Contact
