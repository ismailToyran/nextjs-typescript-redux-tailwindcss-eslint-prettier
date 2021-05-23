import Router from 'next/router';
import { useEffect, useState } from 'react';

const useLayoutAnimation = () => {
  const [layoutAnimation, setLayoutAnimation] = useState<boolean>(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLayoutAnimation(false));
    Router.events.on('routeChangeComplete', () => setLayoutAnimation(true));
    return () => {
      Router.events.off('routeChangeStart', () => setLayoutAnimation(false));
      Router.events.off('routeChangeComplete', () => setLayoutAnimation(true));
    };
  }, []);

  useEffect(() => {
    setLayoutAnimation(true);
  }, []);

  return layoutAnimation;
};

export default useLayoutAnimation;
