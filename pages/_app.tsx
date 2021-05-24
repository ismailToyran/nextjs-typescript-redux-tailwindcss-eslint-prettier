// import App from "next/app";
import { wrapper } from '@components/store';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
// eslint-disable-next-line import/order
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import 'styles/globals.css';
import 'styles/icomoon.css';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  const { locale, pathname } = useRouter();

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <AnimatePresence exitBeforeEnter>
        <Component
          key={`/${locale}${pathname}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...pageProps}
        />
      </AnimatePresence>
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
