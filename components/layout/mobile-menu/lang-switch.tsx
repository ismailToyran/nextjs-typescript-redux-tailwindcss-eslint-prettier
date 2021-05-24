/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const LangSwitch = () => {
  const { locale, asPath } = useRouter();
  return (
    <div className="flex items-center">
      <Link href={asPath} locale="en">
        <a
          className={clsx(
            'text-lg py-1 px-2 block whitespace-no-wrap leading-tight',
            { 'font-semibold text-light-text-primary-color dark:text-dark-text-primary-color': locale === 'en' },
            { 'font-medium text-light-text-disabled-color dark:text-dark-text-disabled-color': locale !== 'en' }
          )}
        >
          EN
        </a>
      </Link>
      <span className="h-full mx-2 border border-light-text-primary-color dark:border-dark-text-primary-color" />
      <Link href={asPath} locale="tr">
        <a
          className={clsx(
            'text-lg py-1 px-2 block whitespace-no-wrap leading-tight',
            { 'font-semibold text-light-text-primary-color dark:text-dark-text-primary-color': locale === 'tr' },
            { 'font-medium text-light-text-disabled-color dark:text-dark-text-disabled-color': locale !== 'tr' }
          )}
        >
          TR
        </a>
      </Link>
    </div>
  );
};

export default LangSwitch;
