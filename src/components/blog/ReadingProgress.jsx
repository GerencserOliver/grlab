"use client";

import { useEffect, useState } from 'react';

/** Thin reading-progress bar pinned under the sticky header (decorative, so aria-hidden). */
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const article = document.getElementById('post-article');
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.2, 0), Math.max(total, 1));
      setProgress(Math.min(100, (scrolled / Math.max(total, 1)) * 100));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div aria-hidden='true' className='fixed left-0 top-24 z-40 h-1 w-full bg-transparent'>
      <div className='h-full bg-brand-700' style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ReadingProgress;
