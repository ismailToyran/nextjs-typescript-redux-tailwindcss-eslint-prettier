import { useStore } from '@hooks';
import React from 'react';

const Navigation = () => {
  const { settings } = useStore();
  const { navigation, resume } = settings;
  const hrefs = ['about', 'projects', 'contact'];

  return (
    <ol className="flex flex-col">
      {navigation.map((item, index) => (
        <li className="mb-2" key={item}>
          <button
            type="button"
            className="block text-light-text-primary hover:text-light-text-primary-color dark:text-dark-text-primary dark:hover:text-dark-text-primary-color p-2.5 transition-colors"
            onClick={() => document.querySelector(`#${hrefs[index]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            <span className="text-sm font-semibold mr-1.5 text-light-text-primary-color dark:text-dark-text-primary-color">{`0${index + 1}.`}</span>
            {item}
          </button>
        </li>
      ))}
      <li>
        <a
          className="block text-light-text-primary hover:text-light-text-primary-color dark:text-dark-text-primary dark:hover:text-dark-text-primary-color p-2.5 transition-colors"
          href={resume.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="text-sm icon-download font-semibold mr-1.5 text-light-text-primary-color dark:text-dark-text-primary-color" />
          {resume.title}
        </a>
      </li>
    </ol>
  );
};

export default Navigation;
