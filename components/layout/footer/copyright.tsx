import { useStore } from '@hooks';
import clsx from 'clsx';
import React from 'react';

const Copyright = () => {
  const { language, settings } = useStore();
  const { copyright } = language;
  const { author } = settings;

  return (
    <div
      className={clsx(
        'flex justify-center px-3 text-xs font-semibold tracking-widest',
        'transition-all transform opacity-0 cursor-pointer copyright w-44',
        'text-light-text-primary dark:text-dark-text-primary',
        'hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1',
        'focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1'
      )}
    >
      {author} © {new Date().getFullYear()} {copyright}
    </div>
  );
};

export default Copyright;
