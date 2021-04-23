import { useEffect } from 'react';

const useHideScroll = (toggler: boolean) => {
  useEffect(() => {
    document.body.style.overflow = toggler ? 'hidden' : 'unset';
  }, [toggler]);
};

export default useHideScroll;
