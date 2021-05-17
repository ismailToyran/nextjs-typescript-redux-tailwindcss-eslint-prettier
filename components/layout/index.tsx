// import gsap from 'gsap';
import Container from '@components/container';
import { IMetaFields } from '@components/contentful/types/contentful';
import React, { ReactNode } from 'react';
import Head from './head';
// import Header from './header';
// import Footer from './footer';

// import Toast from '@components/toast';
// import Hamburger from '@components/hamburger';
// import MobileMenu from '@components/mobile-menu';
// import { useScrollDirection } from '@hooks';
// import SideTopLeft from '@components/layout/side-top-left';
// import SideBottomRight from '@components/layout/side-bottom-right';

type LayoutProps = {
  children: ReactNode;
  meta: IMetaFields;
};

const Layout = ({ meta, children }: LayoutProps) => (
  // const scrollDirection = useScrollDirection('up');
  // const [scrolledToTop, setScrolledToTop] = useState(true);
  // const [scrolledToBottom, setScrolledToBottom] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolledToTop(window.pageYOffset < 96);
  //     setScrolledToBottom(window.innerHeight + window.pageYOffset >= document.body.offsetHeight);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5, ease: 'expo' } });
  //   tl.from('.navigation-line', { width: 0 }, 0)
  //     .from('.navigation', { opacity: 0 }, 0.5)
  //     .from('.top-left-line', { height: 0 }, 1)
  //     .to('.socials', { opacity: 1 }, 1.5)
  //     .from('.copyright-line', { width: 0 }, 0)
  //     .to('.copyright', { opacity: 1 }, 0.5)
  //     .from('.bottom-right-line', { height: 0 }, 1)
  //     .to('.theme', { opacity: 1 }, 1.5);
  //   tl.play();
  // }, []);

  // useEffect(() => {
  //   const scrollAnim = gsap.fromTo('.scroll-down', { opacity: 0, y: 100 }, { opacity: 1, y: 0, ease: 'power1.out' });
  //   scrolledToTop ? scrollAnim.play() : scrollAnim.reverse(0);
  // }, [scrolledToTop]);

  <div className="bg-light-bg dark:bg-dark-bg-color">
    <Head meta={meta} />
    {/* <Header scrollDirection={scrollDirection} atTop={scrolledToTop} atBottom={scrolledToBottom} /> */}
    {/* <Hamburger /> */}
    {/* <MobileMenu /> */}
    {/* <SideTopLeft /> */}
    <Container>{children}</Container>
    {/* <Footer meta={meta} scrollDirection={scrollDirection} atTop={scrolledToTop} atBottom={scrolledToBottom} /> */}
    {/* <SideBottomRight /> */}
    {/* <Toast /> */}
  </div>
);
export default Layout;