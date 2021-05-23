import { useStore } from '@hooks';
import clsx from 'clsx';
import React, { useEffect } from 'react';

const Hamburger = () => {
  const { mobileMenu, toggleMobileMenu, closeMobileMenu } = useStore();

  useEffect(() => {
    const onResize = (e: UIEvent) => {
      const w = e.target as Window;
      if (w.innerWidth > 767) {
        closeMobileMenu();
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [closeMobileMenu]);

  return (
    <button
      className="fixed z-50 flex items-center justify-center w-8 h-6 transition-opacity duration-75 ease-linear cursor-pointer top-9 right-4 sm:right-6 md:hidden hover:opacity-75"
      type="button"
      onClick={toggleMobileMenu}
      aria-label="Menu"
    >
      <span className="flex items-center justify-center w-8 h-5">
        <span
          className={clsx(
            '-mt-0.5 w-8 h-3px block bg-light-text-primary-color dark:bg-dark-text-primary-color rounded relative transform',
            { 'rotate-45': mobileMenu },
            { 'rotate-0': !mobileMenu }
          )}
          style={mobileMenu ? { transition: '75ms cubic-bezier(0.215, 0.610, 0.355, 1) .12s' } : { transition: '75ms cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s' }}
        >
          <span
            className={clsx(
              'block bg-light-text-primary-color dark:bg-dark-text-primary-color absolute rounded-[3px] w-8 h-[3px]',
              { 'top-0 opacity-0': mobileMenu },
              { '-top-2 opacity-100': !mobileMenu }
            )}
            style={mobileMenu ? { transition: 'top 75ms ease 0s, opacity 75ms ease .12s' } : { transition: 'top 75ms ease .12s, opacity 75ms ease 0s' }}
          />
          <span
            className={clsx(
              'block bg-light-text-primary-color dark:bg-dark-text-primary-color absolute rounded-[3px] w-8 h-[3px] transform',
              { 'bottom-0 -rotate-90': mobileMenu },
              { '-bottom-2 rotate-0': !mobileMenu }
            )}
            style={
              mobileMenu
                ? { transition: 'bottom 75ms ease 0s, transform 75ms cubic-bezier(.215, .61, .355, 1) .12s' }
                : { transition: 'bottom 75ms ease .12s, transform 75ms cubic-bezier(.55, .055, .675, .19) 0s' }
            }
          />
        </span>
      </span>
    </button>
  );
};

export default Hamburger;
