import { useEffect, useState } from 'react';

const useScrollDirection = (initialDirection: boolean) => {
  const [scrollUp, setScrollDir] = useState<boolean>(initialDirection);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }
      setScrollDir(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection]);

  return scrollUp;
};

export default useScrollDirection;
