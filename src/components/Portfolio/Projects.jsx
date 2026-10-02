import React from 'react';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Portfolio1 from '../../images/Portfolio/Responsive web design project for Oliver – modern UIUX and mobile-friendly layout.webp'
import Portfolio2 from '../../images/Portfolio/Mobile app development showcase  with intuitive user interface and real-time features.webp'
import Portfolio3 from '../../images/Portfolio/Brand identity design portfolio – logo, typography, and marketing materials for Oliver.webp'
import Portfolio4 from '../../images/Portfolio/Clean code example from my portfolio – React, tailwindcss development with best practices.webp'

import CarRental1 from '../../images/carRental/Premium car rental fleet – luxury sedans, SUVs, and economy cars available 247.webp'

import Gym1 from '../../images/gym/Professional weightlifting area – barbells, dumbbells, and power racks.webp'
import Gym2 from '../../images/gym/High-intensity group training session – HIIT workout with certified trainers.webp'
import Gym3 from '../../images/gym/Map - Conveniently located in Győr.webp'
import Gym4 from '../../images/gym/One-on-one personal training – customized fitness plans and nutrition advice.webp'
import Gym5 from '../../images/gym/Relaxation area with sauna, steam room, and massage services – post-workout recovery.webp'
import Gym6 from '../../images/gym/Cardio zone with treadmills, rowing machines, and ellipticals – burn calories efficiently.webp'
import Gym7 from '../../images/gym/Sports nutrition shop – protein powders, vitamins, and health supplements.webp'
import { useTranslation } from 'react-i18next';

const projectGroups = [
    {
        key: 'digital',
        image: Portfolio1,
        gallery: [Portfolio2, Portfolio3, Portfolio4],
        descriptionKey: 'description1',
        link: 'https://oliver-dev.vercel.app/',
    },
    {
        key: 'rental',
        image: CarRental1,
        gallery: [],
        descriptionKey: 'description2',
    },
    {
        key: 'fitness',
        image: Gym1,
        gallery: [Gym3, Gym2, Gym4, Gym5, Gym6, Gym7],
        descriptionKey: 'description3',
        link: 'https://gym-website-gamma-five.vercel.app/',
    },
];

const Projects = () => {
    const { t } = useTranslation();

  return (
        <section className='bg-white' aria-labelledby='projects-heading'>
            <div className='container mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24'>
                <header className='scroll-in max-w-3xl'>
                    <p className='mb-4 text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>{t('projects.eyebrow')}</p>
                    <h2 id='projects-heading' className='font-poppins text-3xl font-extrabold leading-tight text-[#102a2d] md:text-5xl'>
                        {t('projects.title')}
                    </h2>
                    <p className='mt-5 text-lg leading-relaxed text-[#315b5d] md:text-xl'>{t('projects.intro')}</p>
                </header>

                <div className='mt-12 space-y-12'>
                    {projectGroups.map((project) => (
                            <article key={project.key} className='scroll-in overflow-hidden rounded-3xl border border-[#dfe7e1] bg-[#f5f7f4] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
                            <div className='grid lg:grid-cols-[1.15fr_0.85fr]'>
                                <div className='group overflow-hidden bg-[#dce9df]'>
                                    <img src={project.image} alt={t(`projects.${project.key}.imageAlt`)} loading='lazy' className='aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-105' />
                                </div>
                                <div className='flex flex-col justify-center p-7 md:p-10'>
                                    <p className='text-sm font-bold uppercase tracking-[0.18em] text-orange-700'>{t(`projects.${project.key}.label`)}</p>
                                    <h3 className='mt-3 font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl'>{t(`projects.${project.key}.title`)}</h3>
                                    <p className='mt-4 text-base leading-relaxed text-[#315b5d] md:text-lg'>{t(`projects.${project.descriptionKey}`)}</p>
                                    {project.link && (
                                        <a href={project.link} target='_blank' rel='noopener noreferrer' className='mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-orange-700 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-800'>
                                            {t('projects.viewProject')} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {project.gallery.length > 0 && (
                                <div className='grid grid-cols-2 gap-3 border-t border-[#dfe7e1] bg-white/50 p-3 sm:grid-cols-3 lg:grid-cols-4'>
                                    {project.gallery.map((image, index) => (
                                        <div key={`${project.key}-${index}`} className='group overflow-hidden rounded-2xl bg-white'>
                                            <img src={image} alt={t(`projects.${project.key}.galleryAlt`)} loading='lazy' className='aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105' />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
