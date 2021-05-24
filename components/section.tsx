import { useStore } from '@hooks';
import React, { ReactNode } from 'react';

type ContainerProps = {
  id: string;
  index: number;
  children: ReactNode;
};

const Section = ({ id, index, children }: ContainerProps) => {
  const { language } = useStore();
  const title = language[id as keyof typeof language];
  return (
    <section id={id} className="flex flex-col items-center justify-center min-h-screen px-4 py-12 -mx-4 overflow-hidden lg:py-24">
      <h2 className="mb-4 text-2xl font-semibold leading-tight md:mb-8 lg:mb-12 text-light-text-primary dark:text-dark-text-primary md:text-3xl lg:text-4xl xl:text-5xl">
        <span className="mr-3 font-semibold text-light-text-primary-color dark:text-dark-text-primary-color">{`0${index}.`}</span>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
