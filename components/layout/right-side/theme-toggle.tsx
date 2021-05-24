import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';

type ThemeToggleProps = {
  rotate?: boolean;
};

const motionTheme = {
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

const ThemeToggle = ({ rotate }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const lightTheme = theme === 'light';
  return (
    <motion.div className={clsx('flex items-center md:mb-5 opacity-100', { 'flex-col': rotate })} variants={motionTheme} initial="hidden" animate="visible" exit="exit">
      <button
        aria-label="Select Light Mode"
        className="p-2 text-xl icon-sun text-light-text-primary dark:text-dark-text-disabled-color"
        onClick={() => setTheme('light')}
        type="button"
      />
      <div className={clsx('toggle-checkbox relative inline-block w-16 align-middle select-none transform', { 'my-4 rotate-90': rotate }, { 'mx-2': !rotate })}>
        <label
          aria-label="Theme Toggle"
          className="block transition duration-200 rounded-full cursor-pointer h-9 bg-dark-text-primary-color"
          htmlFor={rotate ? 'mobile-toggle' : 'toggle'}
        >
          <input
            checked={!lightTheme}
            className={clsx(
              'absolute block w-9 h-9 rounded-full bg-white border-4 border-dark-text-primary-color appearance-none cursor-pointer focus:outline-none transition duration-200 transform',
              { 'translate-x-7': !lightTheme }
            )}
            id={rotate ? 'mobile-toggle' : 'toggle'}
            onChange={() => (lightTheme ? setTheme('dark') : setTheme('light'))}
            type="checkbox"
          />
        </label>
      </div>
      <button
        aria-label="Select Dark Mode"
        className="p-2 text-xl icon-moon text-light-text-disabled dark:text-dark-text-primary-color"
        onClick={() => setTheme('dark')}
        type="button"
      />
    </motion.div>
  );
};

ThemeToggle.defaultProps = {
  rotate: false
};

export default ThemeToggle;
