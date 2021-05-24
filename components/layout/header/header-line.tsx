import { motion } from 'framer-motion';
import React from 'react';

const motionLine = {
  hidden: {
    x: '100%'
  },
  visible: {
    x: '0',
    transition: {
      ease: 'easeOut',
      duration: 0.5
    }
  },
  exit: {
    x: '100%',
    transition: {
      ease: 'easeOut',
      delay: 0.5,
      duration: 0.5
    }
  }
};

const HeaderLine = () => (
  <motion.div
    className="hidden h-px md:block w-line-sm xl:w-line-xl lg:w-line-lg md:w-line-md bg-light-text-primary dark:bg-dark-text-primary"
    variants={motionLine}
    initial="hidden"
    animate="visible"
    exit="exit"
  />
);

export default HeaderLine;
