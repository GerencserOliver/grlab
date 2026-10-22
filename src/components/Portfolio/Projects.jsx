"use client";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Jedligram1 from '../../images/jedligram/jedligram_1.webp';
import Jedligram2 from '../../images/jedligram/jedligram_2.webp';
import Jedligram3 from '../../images/jedligram/jedligram_3.webp';
import CarRental1 from '../../images/carRental/carRental_1.webp';
import CarRental2 from '../../images/carRental/carRental_2.webp';
import CarRental3 from '../../images/carRental/carRental_3.webp';
import Gym1 from '../../images/gym/Professional weightlifting area – barbells, dumbbells, and power racks.webp';
import Gym2 from '../../images/gym/High-intensity group training session – HIIT workout with certified trainers.webp';
import Gym3 from '../../images/gym/Map - Conveniently located in Győr.webp';
import Gym4 from '../../images/gym/Cardio zone with treadmills, rowing machines, and ellipticals – burn calories efficiently.webp';
import Pille1 from '../../images/pille/pille_portfolio-_1_.webp';
import Pille2 from '../../images/pille/pille_portfolio-_2_.webp';
import Pille3 from '../../images/pille/pille_portfolio-_3_.webp';
import Pille4 from '../../images/pille/pille_portfolio-_4_.webp';
import Szelvedo1 from '../../images/szelvedo/szelvedo_1.webp';
import Szelvedo2 from '../../images/szelvedo/szelvedo_2.webp';
import Szelvedo3 from '../../images/szelvedo/szelvedo_3.webp';
import Szelvedo4 from '../../images/szelvedo/szelvedo_4.webp';
import Fleetflow1 from '../../images/fleetflow/fleetflow-1.webp';
import Fleetflow2 from '../../images/fleetflow/fleetflow-2.webp';
import Fleetflow3 from '../../images/fleetflow/fleetflow-3.webp';
import Fleetflow4 from '../../images/fleetflow/fleetflow-4.webp';
import Fleetflow5 from '../../images/fleetflow/fleetflow-5.webp';
import Fleetflow6 from '../../images/fleetflow/fleetflow-6.webp';
import Image from 'next/image';

const projectSections = [
    {
        key: 'kun-peter',
        number: '01',
        title: 'Szélvédőjavító',
        description: 'Egyéni vállalkozó számára készített bemutatkozó weboldal, amely mobil eszközökre is optimalizált. A weboldal keresőoptimalizált, ezért a releváns keresések esetén a Google találati listájának első helyein jelenik meg. A Google Cégprofilt is mi hoztuk létre és kezeljük, így a vállalkozás hirdetések fizetése nélkül is az első helyen jelenik meg a keresőben.',
        images: [
            { source: Szelvedo1, alt: 'Szélvédőjavító projekt 1' },
            { source: Szelvedo2, alt: 'Szélvédőjavító projekt 2' },
            { source: Szelvedo3, alt: 'Szélvédőjavító projekt 3' },
            { source: Szelvedo4, alt: 'Szélvédőjavító projekt 4' },
        ],
        url: "https://kunpeter-szelvedojavitas.hu",
    },
    {
        key: 'pille',
        number: '02',
        title: 'Pille Webshop',
        description: 'Komplett webshop saját irányítófelülettel, ahol a tulajdonos önállóan vehet fel termékeket és kezelheti a megrendeléseket, Foxpost, GLS és MPL szállítási lehetőségek integrációjával.',
        images: [
            { source: Pille4, alt: 'Pille projekt 4' },
            { source: Pille2, alt: 'Pille projekt 2' },
            { source: Pille3, alt: 'Pille projekt 3' },
            { source: Pille1, alt: 'Pille projekt 1' },
        ],
        url: null,
    },
    {
        key: 'fleetflow',
        number: '03',
        title: 'FleetFlow',
        description: 'Nagyszabású irodai szoftver egy szállítmányozó cég számára, amelyben nyomon követhetők és adminisztrálhatók a sofőrök útjai, tankolásai és szervizkérelmei. A rendszer statisztikákat, többféle exportálási lehetőséget és különböző felhasználói szerepköröket biztosít. A sofőrök saját mobilalkalmazáson keresztül használhatják, míg az adminisztrátorok webes felületen kezelhetik a teljes flottát. A felhasználók email értesítéseket is kapnak a fontos eseményekről.',
        images: [
            { source: Fleetflow1, alt: 'Fleetflow projekt 1' },
            { source: Fleetflow2, alt: 'Fleetflow projekt 2' },
            { source: Fleetflow3, alt: 'Fleetflow projekt 3' },
            { source: Fleetflow4, alt: 'Fleetflow projekt 4' },
            { source: Fleetflow5, alt: 'Fleetflow projekt 5' },
            { source: Fleetflow6, alt: 'Fleetflow projekt 6' },
        ],
        url: null,
    },
    {
        key: 'car-rental',
        number: '04',
        title: 'Autókölcsönző',
        description: 'Autókölcsönző számára készült, mobilra is optimalizált webalkalmazás saját irányítófelülettel, ahol a tulajdonos könnyedén kezelheti az autókat.',
        images: [
            { source: CarRental1, alt: 'Autókölcsönző projekt 1' },
            { source: CarRental2, alt: 'Autókölcsönző projekt 2' },
            { source: CarRental3, alt: 'Autókölcsönző projekt 3' },
        ],
        url: null,
    },
    {
        key: 'gym',
        number: '05',
        title: 'Fitnesz és wellbeing',
        description: 'Konditerem számára készített bemutatkozó weboldal, amely mobil eszközökre is optimalizált, így minden képernyőméreten könnyen használható.',
        images: [
            { source: Gym1, alt: 'Fitneszterem projekt 1' },
            { source: Gym2, alt: 'Fitneszterem projekt 2' },
            { source: Gym3, alt: 'Fitneszterem projekt 3' },
            { source: Gym4, alt: 'Fitneszterem projekt 4' },
        ],
        url: null,
    },
    {
        key: 'jedligram',
        number: '06',
        title: 'Jedligram',
        description: 'Iskolai közösségi hálózat, ahol a felhasználók képeket oszthatnak meg, különböző csoportokhoz csatlakozhatnak, és mobilon is kényelmesen használhatják a platformot.',
        images: [
            { source: Jedligram1, alt: 'Jedligram projekt 1' },
            { source: Jedligram2, alt: 'Jedligram projekt 2' },
            { source: Jedligram3, alt: 'Jedligram projekt 3' },
        ],
        url: null,
    },
];

const Projects = () => {
    const { t } = useTranslation();
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        if (!activeImage) {
            return undefined;
        }
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveImage(null);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeImage]);

    const openImageLabel = t('projects.openImage', { defaultValue: 'Kép nagyítása' });
    const closeImageLabel = t('projects.closeImage', { defaultValue: 'Bezárás' });

    return (
        <section className='bg-white' aria-labelledby='projects-heading'>
            <div className='container mx-auto max-w-360 px-6 py-16 md:px-10 md:py-20'>
                <div className='mt-8 space-y-8'>
                    {projectSections.map((project) => (
                        <article key={project.key} className='scroll-in overflow-hidden rounded-3xl border border-[#dfe7e1] bg-[#f5f7f4] shadow-sm'>
                            <div className='flex flex-col gap-3 border-b border-[#dfe7e1] px-5 py-5 sm:flex-row sm:items-end sm:justify-between md:px-7'>
                                <div>
                                    <p className='text-xs font-bold uppercase tracking-[0.18em] text-orange-700'>
                                        {project.number} / Projekt
                                    </p>
                                    <h3 className='mt-1 font-poppins text-2xl font-bold text-[#102a2d] md:text-3xl'>
                                        {project.title}
                                    </h3>
                                </div>
                                <div className='max-w-3xl sm:text-right'>
                                    <p className='text-sm leading-relaxed text-[#315b5d]'>
                                        {project.description}
                                    </p>
                                    {project.url !== null && (
                                        <a
                                            href={project.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='mt-2 inline-block text-sm font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 transition hover:text-orange-900'
                                        >
                                            {project.url}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className={`grid grid-cols-2 gap-3 p-3 md:gap-4 md:p-5 ${project.images.length === 1 ? 'md:grid-cols-1' : project.images.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
                                {project.images.map((image, index) => (
                                    <button
                                        key={index}
                                        type='button'
                                        onClick={() => setActiveImage(image)}
                                        className='group relative overflow-hidden rounded-2xl bg-[#dce9df] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2'
                                        aria-label={openImageLabel}
                                    >
                                        <Image
                                            src={image.source}
                                            alt={image.alt}
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                            className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${project.images.length === 1 ? 'aspect-[21/9]' : 'aspect-[4/3]'}`}
                                        />
                                        <span className='pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-[#102a2d]/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                            <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#102a2d]'>
                                                {t('projects.openImage', { defaultValue: 'Megnyitás' })}
                                            </span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {activeImage && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-[#102a2d]/90 p-4 backdrop-blur-sm md:p-10'
                    role='dialog'
                    aria-modal='true'
                    aria-label={t('projects.imagePreview', { defaultValue: 'Kép előnézete' })}
                    onClick={() => setActiveImage(null)}
                >
                    <div className='relative max-h-full max-w-6xl' onClick={(event) => event.stopPropagation()}>
                        <Image src={activeImage.source} alt={activeImage.alt} className='max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl' />
                        <button
                            type='button'
                            onClick={() => setActiveImage(null)}
                            className='absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-[#102a2d] shadow-lg transition hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                            aria-label={closeImageLabel}
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
