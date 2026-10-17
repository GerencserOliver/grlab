import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import jedligram1 from '../../images/jedligram/jedligram_1.png';
import jedligram2 from '../../images/jedligram/jedligram_2.jpg';
import jedligram3 from '../../images/jedligram/jedligram_3.png';
import CarRental1 from '../../images/carRental/carRental_1.png';
import CarRental2 from '../../images/carRental/carRental_2.png';
import CarRental3 from '../../images/carRental/carRental_3.png';
import Gym1 from '../../images/gym/Professional weightlifting area – barbells, dumbbells, and power racks.webp';
import Gym2 from '../../images/gym/High-intensity group training session – HIIT workout with certified trainers.webp';
import Gym3 from '../../images/gym/Map - Conveniently located in Győr.webp';
import Pille1 from '../../images/pille/pille_portfolio (1).png';
import Pille2 from '../../images/pille/pille_portfolio (2).png';
import Pille3 from '../../images/pille/pille_portfolio (3).png';
import Pille4 from '../../images/pille/pille_portfolio (4).jpg';

const projectSections = [
    {
        key: 'jedligram',
        number: '01',
        title: 'Jedligram',
        description: 'Egyedi, letisztult vizuális irány egy kreatív fotós projekt számára.',
        images: [
            { source: jedligram1, alt: 'Jedligram kreatív fotós projekt – portréfotózás' },
            { source: jedligram2, alt: 'Jedligram kreatív fotós projekt – termékfotózás' },
            { source: jedligram3, alt: 'Jedligram kreatív fotós projekt – lifestyle fotózás' },
        ],
    },
    {
        key: 'car-rental',
        number: '02',
        title: 'Autókölcsönző',
        description: 'Prémium, bizalmat építő vizuális irány egy szolgáltatásközpontú autókölcsönző projekthez.',
        images: [
            { source: CarRental1, alt: 'Autókölcsönző projekt – autóflotta bemutatása' },
            { source: CarRental2, alt: 'Autókölcsönző projekt – online foglalási folyamat' },
            { source: CarRental3, alt: 'Autókölcsönző projekt – ügyfélkapcsolati felület' },
        ],
    },
    {
        key: 'gym',
        number: '03',
        title: 'Fitnesz és wellbeing',
        description: 'Energikus, mégis rendezett képi világ edzéshez, regenerációhoz és egészséges életmódhoz.',
        images: [
            { source: Gym1, alt: 'Professzionális súlyzós edzőterem' },
            { source: Gym2, alt: 'Intenzív csoportos edzés' },
            { source: Gym3, alt: 'Fitneszterem elhelyezkedését bemutató térkép' },
        ],
    },
    {
        key: 'pille',
        number: '04',
        title: 'Pille projekt',
        description: 'Egy összefüggő projekt vizuális részletei, egységes kompozícióban és könnyen áttekinthető formában.',
        images: [
            { source: Pille4, alt: 'Pille projekt részlete 1' },
            { source: Pille2, alt: 'Pille projekt részlete 2' },
            { source: Pille3, alt: 'Pille projekt részlete 3' },
            { source: Pille1, alt: 'Pille projekt részlete 4' },
        ],
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
            <div className='container mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20'>


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
                                <p className='max-w-2xl text-sm leading-relaxed text-[#315b5d] sm:text-right'>
                                    {project.description}
                                </p>
                            </div>

                            <div className={`grid grid-cols-2 gap-3 p-3 md:gap-4 md:p-5 ${project.images.length === 1 ? 'md:grid-cols-1' : project.images.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3'}`}>
                                {project.images.map((image, index) => (
                                    <button
                                        key={image.source}
                                        type='button'
                                        onClick={() => setActiveImage(image)}
                                        className='group relative overflow-hidden rounded-2xl bg-[#dce9df] text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2'
                                        aria-label={openImageLabel}
                                    >
                                        <img
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
                        <img src={activeImage.source} alt={activeImage.alt} className='max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl' />
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
