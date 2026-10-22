"use client";

import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-in');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Megakadályozza az ismételt animációt
          }
        });
      },
      {
        threshold: 0.1, // Akkor aktiválódik, amikor a szakasz 10%-ban látható
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ScrollAnimation;
