import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useIntro = () => {
  const { locale } = useRouter();
  const storage = window.localStorage;
  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem(`timestamp${locale}`) || '1000');

  const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed ? storage.setItem(`timestamp${locale}`, currTimestamp.toString()) : storage.setItem(`timestamp${locale}`, timestamp.toString());
  }, [currTimestamp, hasTimePassed, locale, storage, timestamp]);

  return hasTimePassed;
};

export default useIntro;
