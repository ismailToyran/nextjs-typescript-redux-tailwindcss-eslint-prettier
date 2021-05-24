import { useStore } from '@hooks';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

const motionCopyright = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 0.5,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5
    }
  }
};
const Copyright = () => {
  const { language, settings } = useStore();
  const { copyright } = language;
  const { author } = settings;

  return (
    <motion.div
      className={clsx(
        'flex justify-center px-3 text-xs font-semibold tracking-widest',
        'transition-all transform cursor-pointer w-44',
        'text-light-text-primary dark:text-dark-text-primary',
        'hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1',
        'focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1'
      )}
      variants={motionCopyright}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {author} © {new Date().getFullYear()} {copyright}
    </motion.div>
  );
};

export default Copyright;
