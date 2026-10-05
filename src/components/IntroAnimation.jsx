import { useEffect, useState } from 'react';

const IntroAnimation = () => {
  const [isIntroVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isIntroVisible && (
        <div className="intro-background"></div>
      )}
    </div>
  );
}

export default IntroAnimation;
