import { useEffect } from 'react';

const useHideScroll = (toggler: boolean) => {
  useEffect(() => {
    if (toggler) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggler]);
};

export default useHideScroll;
