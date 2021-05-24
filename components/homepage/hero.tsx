import ScrollDown from '@components/scroll-down';
import { useStore } from '@hooks';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';

type HeroProps = {
  data: string[];
};

const sentence = {
  hidden: {
    opacity: 0
  },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 3,
      staggerChildren: 0.08,
      delayChildren: 3 + index * 4
    }
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

const letter = {
  hidden: {
    y: 250
  },
  visible: {
    y: 0,
    opacity: [0, 1, 1, 0],
    transition: {
      ease: 'easeOut',
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: 8,
      times: [0, 0.2, 0.8, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

const highlight = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? '50%' : '-50%'
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2,
      duration: 1,
      ease: 'easeOut'
    }
  },
  exit: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? '50%' : '-50%',
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  })
};

const backgroundImage = ['linear-gradient(90deg,#FF4D4D,#F9CB28)', 'linear-gradient(90deg,#7928CA,#FF0080)', 'linear-gradient(90deg,#00DFD8,#00F260)'];

const Hero = ({ data }: HeroProps) => {
  const { language } = useStore();
  const { locale } = useRouter();
  const { titleFirst, titleSecond } = language;

  return (
    <div className="relative flex flex-col justify-center h-full min-h-screen">
      <h1
        className={clsx(
          'mt-auto overflow-hidden font-bold leading-tight text-light-text-primary-color dark:text-dark-text-primary-color',
          'text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl'
        )}
      >
        <motion.span className="block p-4" variants={highlight} custom="left" initial="hidden" animate="visible" exit="exit">
          {titleFirst}{' '}
        </motion.span>
        <div className="relative flex justify-center -mt-2 py-[5vh] md:py-[10vh]">
          {data.map((keyword, index) => (
            <motion.div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              variants={sentence}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={keyword}
            >
              {keyword.split('').map((char, ind) => (
                <motion.span
                  className="text-4xl w-min text-bg sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
                  style={{ backgroundImage: backgroundImage[index] }}
                  key={`${data[index] + locale + char + ind}`}
                  variants={letter}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </div>
        <motion.span className="block p-4 text-right" variants={highlight} custom="right" initial="hidden" animate="visible" exit="exit">
          {' '}
          {titleSecond}
        </motion.span>
      </h1>
      <ScrollDown onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'center' })} />
    </div>
  );
};

export default Hero;
