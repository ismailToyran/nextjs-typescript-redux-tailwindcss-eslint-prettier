import Container from '@components/container';
import { IMetaFields } from '@components/contentful/types/contentful';
import Hamburger from '@components/hamburger';
import Footer from '@components/layout/footer';
import Head from '@components/layout/head';
import Header from '@components/layout/header';
import LeftSide from '@components/layout/left-side';
import RightSide from '@components/layout/right-side';
import { useScrollDirection } from '@hooks';
// import Toast from '@components/toast';
import MobileMenu from '@layout/mobile-menu';
import React, { ReactNode, useEffect, useState } from 'react';

type LayoutProps = {
  children: ReactNode;
  meta: IMetaFields;
};

const Layout = ({ meta, children }: LayoutProps) => {
  const scrollUp = useScrollDirection(true);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 96);
      setScrolledToBottom(window.innerHeight + window.pageYOffset >= document.body.offsetHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-light-bg dark:bg-dark-bg-color">
      <Head meta={meta} />
      <Header scrollUp={scrollUp} atTop={scrolledToTop} atBottom={scrolledToBottom} />
      <Hamburger />
      <MobileMenu />
      <LeftSide />
      <Container>{children}</Container>
      <Footer scrollUp={scrollUp} atTop={scrolledToTop} atBottom={scrolledToBottom} />
      <RightSide />
      {/* <Toast /> */}
    </div>
  );
};
export default Layout;
