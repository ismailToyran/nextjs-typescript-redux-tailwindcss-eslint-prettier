import { useStore } from '@hooks';
import React from 'react';

const Navigation = () => {
  const { settings } = useStore();
  const { navigation, resume } = settings;
  const hrefs = ['about', 'projects', 'contact'];

  return (
    <ol className="hidden md:flex">
      {navigation.map((item, index) => (
        <li className="mr-2 lg:mr-6" key={item}>
          <button
            type="button"
            className="block text-light-text-primary hover:text-light-text-primary-color dark:text-dark-text-primary dark:hover:text-dark-text-primary-color p-2.5 transition-colors"
            onClick={() => document.querySelector(`#${hrefs[index]}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <span className="text-sm font-semibold mr-1.5 text-light-text-primary-color dark:text-dark-text-primary-color">{`0${index + 1}.`}</span>
            {item}
          </button>
        </li>
      ))}
      <li className="mr-2 lg:mr-6">
        <a
          className="block text-light-text-primary hover:text-light-text-primary-color dark:text-dark-text-primary dark:hover:text-dark-text-primary-color p-2.5 transition-colors"
          href={resume.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon-download text-sm font-semibold mr-1.5 text-light-text-primary-color dark:text-dark-text-primary-color" />
          {resume.title}
        </a>
      </li>
    </ol>
  );
};

export default Navigation;
