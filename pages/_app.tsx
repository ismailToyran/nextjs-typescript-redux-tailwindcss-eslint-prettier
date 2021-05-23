// import App from "next/app";
import { SET_LAYOUT_ANIMATION, wrapper } from '@components/store';
import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/order
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'styles/globals.css';
import 'styles/icomoon.css';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const setLayoutAnimation = (val: boolean) => dispatch({ type: SET_LAYOUT_ANIMATION, payload: val });
    Router.events.on('routeChangeStart', () => setLayoutAnimation(false));
    Router.events.on('routeChangeComplete', () => setLayoutAnimation(true));
    return () => {
      Router.events.off('routeChangeStart', () => setLayoutAnimation(false));
      Router.events.off('routeChangeComplete', () => setLayoutAnimation(true));
    };
  }, [dispatch]);

  useEffect(() => {
    const setLayoutAnimation = (val: boolean) => dispatch({ type: SET_LAYOUT_ANIMATION, payload: val });
    setLayoutAnimation(true);
  }, [dispatch]);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageProps}
      />
    </ThemeProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default wrapper.withRedux(WrappedApp);
