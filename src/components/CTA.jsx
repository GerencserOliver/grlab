import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ctaImg from '../images/Illustration-of-website-development.webp';

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const { t } = useTranslation(); // useTranslation hook

  // Input változók kezelése
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Az űrlap beküldése
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t('cta.sending')); // Lokalizált státusz

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(t('cta.successMessage')); // Lokalizált sikerüzenet
      } else {
        setStatus(t('cta.failureMessage')); // Lokalizált hibaüzenet
      }
    } catch (error) {
      setStatus(t('cta.errorMessage') + error.message); // Lokalizált hiba
    }
  };

  return (
    <section className='flex items-center justify-center bg-[#f5f7f4] px-5 py-16 md:py-24'>
      <div className='mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center gap-10 md:flex-row'>
        <form onSubmit={handleSubmit} className='w-full md:w-1/2' aria-describedby='contact-description'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>{t('cta.eyebrow')}</p>
          <h2 className='mb-4 text-center font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-left md:text-5xl'>
            {t('cta.title')}
          </h2>
          <p id='contact-description' className='mb-8 text-center leading-relaxed text-[#315b5d] md:text-left'>{t('cta.description')}</p>
          <div className='space-y-5'>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-name'>{t('cta.nameLabel')}
            <input
              id='contact-name'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='mt-2 block w-full rounded-xl border border-[#c9d8cc] bg-white px-4 py-3 font-poppins text-base text-black outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-200'
              type='text'
              required
            />
            </label>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-email'>{t('cta.emailLabel')}
            <input
              id='contact-email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='mt-2 block w-full rounded-xl border border-[#c9d8cc] bg-white px-4 py-3 font-poppins text-base text-black outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-200'
              type='email'
              required
            />
            </label>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-message'>{t('cta.messageLabel')}
            <textarea
              id='contact-message'
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='mt-2 block h-36 w-full rounded-xl border border-[#c9d8cc] bg-white px-4 py-3 font-poppins text-base text-black outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-200'
              required
            />
            </label>
          </div>
          <button
            type="submit"
            className='mt-2 w-full rounded-xl bg-orange-700 px-6 py-4 font-poppins font-bold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300'
          >
            {t('cta.submitButton')}
          </button>
          {status && (
            <p role='status' aria-live='polite' className='mt-4 text-sm font-semibold text-[#0f766e]'>
              {status}
            </p>
          )}
        </form>
        <div className='w-full md:w-1/2'>
          <img src={ctaImg} alt={t('cta.imageAlt')} loading='lazy' className='mx-auto h-auto w-full max-w-lg object-contain' />
        </div>
      </div>
    </section>
  );
};

export default CTA;