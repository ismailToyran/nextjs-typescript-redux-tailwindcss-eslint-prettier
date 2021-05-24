import { motion } from 'framer-motion';
import React from 'react';

const motionLine = {
  hidden: {
    y: '-100%'
  },
  visible: {
    y: '0',
    transition: {
      ease: 'easeOut',
      delay: 1,
      duration: 0.5
    }
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeOut',
      delay: 0.5,
      duration: 0.5
    }
  }
};

const LeftLine = () => (
  <motion.div
    className="block w-px mx-auto h-line xl:h-line-xl max-h-line bg-light-text-primary dark:bg-dark-text-primary"
    variants={motionLine}
    initial="hidden"
    animate="visible"
    exit="exit"
  />
);

export default LeftLine;
