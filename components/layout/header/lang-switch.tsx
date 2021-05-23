/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type LangSwitchProps = {
  scrollUp: boolean;
  atTop: boolean;
};

const LangSwitch = ({ scrollUp, atTop }: LangSwitchProps) => {
  const { locale, asPath } = useRouter();
  return (
    <div className="relative hidden md:inline-block group ml-2.5">
      <button
        type="button"
        className={clsx(
          'inline-flex justify-center w-full px-3 py-2 text-sm font-medium',
          'border rounded-md border-light-text-primary dark:border-dark-text-primary text-light-text-primary dark:text-dark-text-primary'
        )}
        id="language-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {locale?.toUpperCase()}
        <i className="ml-1 -mr-2 text-xl transition-transform transform -rotate-90 icon-down group-hover:rotate-0" />
      </button>
      <div className="absolute left-0 right-0 invisible pt-2 transition-all opacity-0 group-hover:visible group-hover:opacity-100">
        <div
          className={clsx('border rounded-md border-light-text-primary dark:border-dark-text-primary bg-transparent dark:bg-transparent', {
            'bg-light-bg dark:bg-dark-bg-paper-color': scrollUp && !atTop
          })}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <Link href={asPath} locale="en">
            <a
              className={clsx(
                'block px-4 py-2',
                'text-sm text-center text-light-text-primary dark:text-dark-text-primary',
                'hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color'
              )}
            >
              EN
            </a>
          </Link>
          <Link href={asPath} locale="tr">
            <a
              className={clsx(
                'block px-4 py-2',
                'text-sm text-center text-light-text-primary dark:text-dark-text-primary',
                'hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color'
              )}
            >
              TR
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LangSwitch;
