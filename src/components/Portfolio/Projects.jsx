"use client";

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Jedligram1 from '../../images/jedligram/jedligram_1.webp';
import Jedligram2 from '../../images/jedligram/jedligram_2.webp';
import Jedligram3 from '../../images/jedligram/jedligram_3.webp';
import CarRental1 from '../../images/carRental/carRental_1.webp';
import CarRental2 from '../../images/carRental/carRental_2.webp';
import CarRental3 from '../../images/carRental/carRental_3.webp';
import Gym1 from '../../images/gym/gym_1.webp';
import Gym2 from '../../images/gym/gym_2.webp';
import Gym3 from '../../images/gym/gym_3.webp';
import Gym4 from '../../images/gym/gym_4.webp';
import Pille1 from '../../images/pille/pille_1.webp';
import Pille2 from '../../images/pille/pille_2.webp';
import Pille3 from '../../images/pille/pille_3.webp';
import Pille4 from '../../images/pille/pille_4.webp';
import Szelvedo1 from '../../images/szelvedo/szelvedo_1.webp';
import Szelvedo2 from '../../images/szelvedo/szelvedo_2.webp';
import Szelvedo3 from '../../images/szelvedo/szelvedo_3.webp';
import Szelvedo4 from '../../images/szelvedo/szelvedo_4.webp';
import Fleetflow1 from '../../images/fleetflow/fleetflow_1.webp';
import Fleetflow2 from '../../images/fleetflow/fleetflow_2.webp';
import Fleetflow3 from '../../images/fleetflow/fleetflow_3.webp';
import Fleetflow4 from '../../images/fleetflow/fleetflow_4.webp';
import Fleetflow5 from '../../images/fleetflow/fleetflow_5.webp';
import Fleetflow6 from '../../images/fleetflow/fleetflow_6.webp';
import Image from 'next/image';
import { PROJECT_URLS } from '../../lib/projects';

// Alt text is generated from the localized project title (messages: projects.imageAlt).
const projectSections = [
    { key: 'szelvedo', number: '01', images: [Szelvedo1, Szelvedo2, Szelvedo3, Szelvedo4] },
    { key: 'pille', number: '02', images: [Pille4, Pille2, Pille3, Pille1] },
    { key: 'fleetflow', number: '03', images: [Fleetflow1, Fleetflow2, Fleetflow3, Fleetflow4, Fleetflow5, Fleetflow6] },
    { key: 'car-rental', number: '04', images: [CarRental1, CarRental2, CarRental3] },
    { key: 'gym', number: '05', images: [Gym1, Gym2, Gym3, Gym4] },
    { key: 'jedligram', number: '06', images: [Jedligram1, Jedligram2, Jedligram3] },
];

const GRID_SIZES = '(min-width: 1280px) 22vw, (min-width: 640px) 30vw, 46vw';

const Projects = () => {
    const t = useTranslations('projects');
    const [activeImage, setActiveImage] = useState(null);
    const closeButtonRef = useRef(null);
    const lastFocusedRef = useRef(null);

    useEffect(() => {
        if (!activeImage) {
            return undefined;
        }
        lastFocusedRef.current = document.activeElement;
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveImage(null);
            }
            // The dialog's only focusable control is the close button: keep focus inside.
            if (event.key === 'Tab') {
                event.preventDefault();
                closeButtonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            lastFocusedRef.current?.focus?.();
        };
    }, [activeImage]);

    return (
        <section className='bg-white'>
            <div className='container mx-auto max-w-360 px-6 py-16 md:px-10 md:py-20'>
                <div className='mt-8 space-y-8'>
                    {projectSections.map((project, projectIndex) => {
                        const title = t(`${project.key}.title`);
                        const url = PROJECT_URLS[project.key];
                        return (
                            <article key={project.key} className='scroll-in overflow-hidden rounded-3xl border border-[#dfe7e1] bg-[#f5f7f4] shadow-sm'>
                                <div className='flex flex-col gap-3 border-b border-[#dfe7e1] px-5 py-5 sm:flex-row sm:items-end sm:justify-between md:px-7'>
                                    <div>
                                        <p className='text-xs font-bold uppercase tracking-[0.18em] text-orange-700'>
                                            {project.number} / {t('label')}
                                        </p>
                                        <h2 className='mt-1 font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl'>
                                            {title}
                                        </h2>
                                    </div>
                                    <div className='max-w-3xl sm:text-right'>
                                        <p className='text-sm leading-relaxed text-[#315b5d]'>
                                            {t(`${project.key}.description`)}
                                        </p>
                                        {url && (
                                            <a
                                                href={url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='mt-2 inline-block text-sm font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 transition hover:text-orange-900'
                                            >
                                                {url.replace(/^https?:\/\//, '')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className={`grid grid-cols-2 gap-3 p-3 md:gap-4 md:p-5 ${project.images.length === 1 ? 'md:grid-cols-1' : project.images.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
                                    {project.images.map((source, index) => {
                                        const alt = t('imageAlt', { title, number: index + 1 });
                                        const isLcp = projectIndex === 0 && index === 0;
                                        return (
                                            <button
                                                key={index}
                                                type='button'
                                                onClick={() => setActiveImage({ source, alt })}
                                                className='group relative overflow-hidden rounded-2xl bg-[#dce9df] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2'
                                                aria-label={`${t('openImage')}: ${alt}`}
                                            >
                                                <Image
                                                    src={source}
                                                    alt={alt}
                                                    sizes={GRID_SIZES}
                                                    loading={isLcp ? 'eager' : 'lazy'}
                                                    fetchPriority={isLcp ? 'high' : 'auto'}
                                                    className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${project.images.length === 1 ? 'aspect-21/9' : 'aspect-4/3'}`}
                                                />
                                                <span className='pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-[#102a2d]/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100' aria-hidden='true'>
                                                    <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#102a2d]'>
                                                        {t('openImage')}
                                                    </span>
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
            {activeImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-[#102a2d]/90 p-4 backdrop-blur-sm md:p-10'
                    role='dialog'
                    aria-modal='true'
                    aria-label={t('imagePreview')}
                    onClick={() => setActiveImage(null)}
                >
                    <div className='relative max-h-full max-w-6xl' onClick={(event) => event.stopPropagation()}>
                        <Image src={activeImage.source} alt={activeImage.alt} sizes='90vw' className='max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl' />
                        <button
                            ref={closeButtonRef}
                            type='button'
                            onClick={() => setActiveImage(null)}
                            className='absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#102a2d] shadow-lg transition hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                            aria-label={t('closeImage')}
                        >
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
