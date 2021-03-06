import { useStore } from '@hooks';
import HeaderLine from '@layout/header/header-line';
import LangSwitch from '@layout/header/lang-switch';
import Logo from '@layout/header/logo';
import Navigation from '@layout/header/navigation';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

type HeaderProps = {
  scrollUp: boolean;
  atTop: boolean;
  atBottom: boolean;
};

const motionNavigation = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      delay: 0.5,
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

const Header = ({ scrollUp, atTop, atBottom }: HeaderProps) => {
  const { mobileMenu } = useStore();

  return (
    <header
      className={clsx(
        'header fixed top-0 right-0 z-30 flex items-center w-full h-24 px-4',
        'transition-all duration-300 ease-linear transform pointer-events-auto select-auto md:w-layout lg:w-layout-lg md:rounded-bl-3xl md:px-0 sm:px-6',
        { 'translate-y-0 bg-light-bg dark:bg-dark-bg-paper-color shadow-light dark:shadow-dark': scrollUp && !atTop },
        { 'md:-translate-y-24 bg-light-bg md:bg-transparent dark:bg-dark-bg-paper-color md:dark:bg-transparent shadow-light dark:shadow-dark': !scrollUp && !atTop && !atBottom },
        { 'bg-light-bg md:bg-transparent dark:bg-dark-bg-paper-color md:dark:bg-transparent': !scrollUp && atBottom },
        { 'filter blur-sm brightness-75': mobileMenu }
      )}
    >
      <motion.nav className="flex items-center w-full h-full" variants={motionNavigation} initial="hidden" animate="visible" exit="exit">
        <Logo />
        <Navigation />
        <LangSwitch scrollUp={scrollUp} atTop={atTop} />
      </motion.nav>
      <HeaderLine />
    </header>
  );
};

export default Header;
