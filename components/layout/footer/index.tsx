import { useStore } from '@hooks';
import Copyright from '@layout/footer/copyright';
import FooterLine from '@layout/footer/footer-line';
import clsx from 'clsx';
import React from 'react';

type FooterProps = {
  scrollUp: boolean;
  atTop: boolean;
  atBottom: boolean;
};

const Footer = ({ scrollUp, atTop, atBottom }: FooterProps) => {
  const { mobileMenu } = useStore();

  return (
    <footer
      className={clsx(
        'static md:fixed bottom-0 left-0 flex justify-center md:justify-start items-center text-center z-20',
        'w-full md:w-layout lg:w-layout-lg h-24 rounded-tr-3xl pointer-events-auto select-auto',
        'transition-filter md:transition md:ease-linear md:duration-300 transform-none md:transform',
        { 'md:translate-y-0 md:bg-light-bg md:dark:bg-dark-bg-paper-color shadow-light dark:shadow-dark': scrollUp && !atTop && !atBottom },
        { 'md:translate-y-24': !scrollUp && !atTop && !atBottom },
        { 'filter blur-sm brightness-75': mobileMenu }
      )}
    >
      <FooterLine />
      <Copyright />
    </footer>
  );
};

export default Footer;
