import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type ScrollDownProps = {
  onClick: () => void;
};

const motionScrollDown = {
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      ease: 'easeOut',
      duration: 0.5
    }
  }
};

const ScrollDown = ({ onClick }: ScrollDownProps) => {
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 96);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="z-50 flex h-16 mx-auto mt-auto mb-8 cursor-pointer fill-current text-light-text-primary-color dark:text-dark-text-primary-color md:mb-24 lg:mb-8"
      onClick={onClick}
      variants={motionScrollDown}
      initial="hidden"
      animate={scrolledToTop ? 'visible' : 'exit'}
      exit="exit"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="48.852" viewBox="0 0 30 48.852">
        <g transform="translate(-699.39 52.56)">
          <path className="animate-pulse1" d="M714.39-36.146l-14.707-14.708a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l13.293 13.293 13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
          <path className="animate-pulse2" d="M714.39-19.927l-14.707-14.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l13.293 13.293 13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
          <path className="animate-pulse3" d="M714.39-3.708l-14.707-14.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0L714.39-6.536l13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
        </g>
      </svg>
    </motion.div>
  );
};

export default ScrollDown;
