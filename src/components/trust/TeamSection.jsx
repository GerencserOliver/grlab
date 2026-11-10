import { getTranslations } from 'next-intl/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TEAM } from '../../../content/team';

/** The two founders: initials avatar (no photos), role, focus areas and GitHub link. */
const TeamSection = async () => {
  const t = await getTranslations('about');

  return (
    <section className='bg-white' aria-labelledby='team-heading'>
      <div className='container mx-auto max-w-360 px-6 py-20 md:px-10 md:py-24'>
        <div className='scroll-in max-w-3xl'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700'>{t('teamEyebrow')}</p>
          <h2 id='team-heading' className='font-poppins text-3xl font-extrabold leading-tight text-ink md:text-5xl'>{t('teamTitle')}</h2>
        </div>
        <ul className='scroll-in mt-12 grid grid-cols-1 gap-5 md:grid-cols-2'>
          {TEAM.map((member) => {
            const name = t(`team.${member.id}.name`);
            const focus = t.raw(`team.${member.id}.focus`);
            return (
              <li key={member.id}>
                <article className='flex h-full flex-col rounded-3xl border border-line bg-surface-alt p-7 md:p-8'>
                  <div className='flex items-center gap-5'>
                    <span
                      aria-hidden='true'
                      className='flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-700 to-brand-green-700 font-poppins text-3xl font-extrabold text-white'
                    >
                      {member.initial}
                    </span>
                    <div>
                      <h3 className='font-poppins text-2xl font-extrabold text-ink'>{name}</h3>
                      <p className='mt-1 text-base font-semibold text-ink-muted'>{t(`team.${member.id}.role`)}</p>
                    </div>
                  </div>
                  <p className='mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand-700'>{t('focusLabel')}</p>
                  <ul className='mt-3 flex flex-1 flex-wrap content-start gap-2'>
                    {Array.isArray(focus) &&
                      focus.map((item) => (
                        <li key={item} className='rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-line-strong'>
                          {item}
                        </li>
                      ))}
                  </ul>
                  <div className='mt-6 flex flex-wrap gap-x-6 gap-y-2'>
                    <a
                      href={member.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={t('linkedinLabel', { name })}
                      className='inline-flex w-fit items-center gap-2 font-poppins text-base font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900'
                    >
                      {t('linkedinLink')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
                    </a>
                    <a
                      href={member.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={t('githubLabel', { name })}
                      className='inline-flex w-fit items-center gap-2 font-poppins text-base font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-900'
                    >
                      {t('githubLink')} <FontAwesomeIcon icon={faArrowRight} aria-hidden='true' />
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
