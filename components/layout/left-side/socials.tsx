import { useStore } from '@hooks';
import { motion } from 'framer-motion';
import React from 'react';

const motionSocials = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 1.5,
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

const Socials = () => {
  const { settings } = useStore();
  const { socials, email } = settings;
  return (
    <motion.ul className="flex md:block mt-2.5 md:mt-5" variants={motionSocials} initial="hidden" animate="visible" exit="exit">
      {(Object.keys(socials) as Array<keyof typeof socials>).map((link) => (
        <li key={link}>
          <a href={socials[link]} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${link}`} title={link.replace(/\b\w/g, (l) => l.toUpperCase())}>
            <i
              className={`icon-${link} flex justify-center p-3 text-lg text-light-text-primary dark:text-dark-text-primary transform transition-all hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1 focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1`}
            />
          </a>
        </li>
      ))}
      <li>
        <a href={`mailto:${email}`} aria-label="Send Email" title="Send Email">
          <i className="flex justify-center p-3 text-lg transition-all transform icon-message text-light-text-primary dark:text-dark-text-primary hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1 focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1" />
        </a>
      </li>
    </motion.ul>
  );
};

export default Socials;
