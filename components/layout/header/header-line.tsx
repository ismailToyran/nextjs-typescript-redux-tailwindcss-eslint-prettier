import clsx from 'clsx';
import React from 'react';

const HeaderLine = () => (
  <div className={clsx('hidden h-px navigation-line md:block w-line-sm xl:w-line-xl lg:w-line-lg md:w-line-md bg-light-text-primary dark:bg-dark-text-primary')} />
);

export default HeaderLine;
