"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ctaImg from '../images/Illustration-of-website-development.webp';
import Image from 'next/image';
import { BUSINESS } from '../lib/business';

const INITIAL_FORM = { name: '', email: '', message: '', website: '' };

const CTA = () => {
  // `website` is a honeypot: hidden from people, filled in by naive bots.
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const t = useTranslations('cta');
  const isSending = status.type === 'sending';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setStatus({ type: 'sending', message: t('sending') });
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData(INITIAL_FORM);
        setStatus({ type: 'success', message: t('successMessage') });
      } else {
        setStatus({ type: 'error', message: t('failureMessage') });
      }
    } catch {
      setStatus({ type: 'error', message: t('failureMessage') });
    }
  };

  const fieldClass = 'mt-2 block w-full rounded-xl border border-[#c9d8cc] bg-white px-4 py-3 font-poppins text-base text-black outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-200 disabled:opacity-60';

  return (
    <section className='flex items-center justify-center bg-[#f5f7f4] px-5 py-16 md:py-24'>
      <div className='mx-auto flex w-full max-w-300 flex-col-reverse items-center gap-10 md:flex-row'>
        <form onSubmit={handleSubmit} className='w-full md:w-1/2' aria-describedby='contact-description'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>{t('eyebrow')}</p>
          <h2 className='mb-4 font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] text-left md:text-5xl'>
            {t('title')}
          </h2>
          <p id='contact-description' className='mb-8 leading-relaxed text-[#315b5d] text-left'>{t('description')}</p>
          <div className='space-y-5'>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-name'>{t('nameLabel')}
            <input
              id='contact-name'
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={fieldClass}
              type='text'
              autoComplete='name'
              maxLength={120}
              disabled={isSending}
              required
            />
            </label>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-email'>{t('emailLabel')}
            <input
              id='contact-email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
              type='email'
              autoComplete='email'
              inputMode='email'
              maxLength={254}
              disabled={isSending}
              required
            />
            </label>
            <label className='block font-semibold text-[#102a2d]' htmlFor='contact-message'>{t('messageLabel')}
            <textarea
              id='contact-message'
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${fieldClass} h-36`}
              maxLength={5000}
              disabled={isSending}
              required
            />
            </label>
            <div className='absolute -left-2499.75 h-0 w-0 overflow-hidden' aria-hidden='true'>
              <label htmlFor='contact-website'>Website</label>
              <input
                id='contact-website'
                name='website'
                value={formData.website}
                onChange={handleChange}
                type='text'
                tabIndex={-1}
                autoComplete='off'
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSending}
            className='mt-2 w-full rounded-xl bg-orange-700 px-6 py-4 font-poppins font-bold text-white transition-colors hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-70'
          >
            {isSending ? t('sending') : t('submitButton')}
          </button>
          {status.message && status.type !== 'sending' && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              className={`mt-4 text-sm font-semibold ${status.type === 'error' ? 'text-red-700' : 'text-[#0f766e]'}`}
            >
              {status.message}
            </p>
          )}
          <p className='mt-6 text-sm text-[#315b5d]'>
            {t('phonePrompt')}{' '}
            <a
              href={BUSINESS.phoneHref}
              className='font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-900'
            >
              {t('phoneAction')} {BUSINESS.phoneDisplay}
            </a>
          </p>
        </form>
        <div className='w-full md:w-1/2'>
          <Image src={ctaImg} alt={t('imageAlt')} loading='lazy' sizes='(min-width: 768px) 50vw, 100vw' className='mx-auto h-auto w-full max-w-lg object-contain' />
        </div>
      </div>
    </section>
  );
};

export default CTA;
