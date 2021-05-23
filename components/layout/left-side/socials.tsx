import { useStore } from '@hooks';
import React from 'react';

const Socials = () => {
  const { settings } = useStore();
  const { socials, email } = settings;
  return (
    <ul className="socials flex md:block mt-2.5 md:mt-5 opacity-0">
      {(Object.keys(socials) as Array<keyof typeof socials>).map((link) => (
        <li key={link}>
          <a href={socials[link]} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${link}`} title={link.replace(/\b\w/g, (l) => l.toUpperCase())}>
            <i
              className={`icon-${link} flex justify-center p-3 text-lg text-light-text-primary dark:text-dark-text-primary transform transition-all hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1 focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1`}
            />
          </a>
        </li>
      ))}
      <li>
        <a href={`mailto:${email}`} aria-label="Send Email" title="Send Email">
          <i className="flex justify-center p-3 text-lg transition-all transform icon-message text-light-text-primary dark:text-dark-text-primary hover:text-light-text-primary-color dark:hover:text-dark-text-primary-color hover:-translate-y-1 focus:text-light-text-primary-color dark:focus:text-dark-text-primary-color focus:-translate-y-1" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
