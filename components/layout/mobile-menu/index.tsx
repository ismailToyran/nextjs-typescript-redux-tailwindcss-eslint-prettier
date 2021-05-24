/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHideScroll, useStore } from '@hooks';
import Socials from '@layout/left-side/socials';
import Navigation from '@layout/mobile-menu/navigation';
import ThemeToggle from '@layout/right-side/theme-toggle';
import clsx from 'clsx';
import React from 'react';
import LangSwitch from './lang-switch';

const MobileMenu = () => {
  const { mobileMenu, closeMobileMenu } = useStore();
  useHideScroll(mobileMenu);
  return (
    <>
      {mobileMenu && (
        <div role="button" aria-label="Close Menu" className="fixed inset-0 z-40 block md:hidden" onClick={closeMobileMenu} onKeyDown={closeMobileMenu} tabIndex={0} />
      )}
      <div
        className={clsx(
          'z-40 flex md:hidden flex-col transform w-80 items-center justify-evenly fixed top-0 bottom-0 right-0 pt-24 pb-9 bg-light-bg dark:bg-dark-bg-paper-color transition-all duration-500 shadow-light dark:shadow-dark',
          { 'opacity-100': mobileMenu },
          { 'opacity-0 translate-x-80': !mobileMenu }
        )}
      >
        <ThemeToggle />
        <Navigation />
        <LangSwitch />
        <Socials />
      </div>
    </>
  );
};

export default MobileMenu;
