import { IProjectFields } from '@components/contentful/types/contentful';
import Image from '@components/image';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type ProjectCardProps = {
  data: IProjectFields;
  index: number;
};

const motionProjectCard = {
  hidden: (index: number) => ({
    x: index % 2 === 0 ? 200 : -200,
    y: 200,
    opacity: 0
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  },
  exit: (index: number) => ({
    x: index % 2 === 0 ? 200 : -200,
    y: 200,
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  })
};

const ProjectCard = ({ data, index }: ProjectCardProps) => {
  const { title, description, image, techs, link } = data;
  const controls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px'
  });

  useEffect(() => {
    inView ? controls.start('visible') : controls.start('hidden');
  }, [inView, controls]);

  return (
    <motion.div className="relative w-full mb-24 last:mb-0" custom={index} ref={ref} variants={motionProjectCard} initial="hidden" animate={controls} exit="exit">
      <div className="mb-6 text-center lg:hidden">
        <h3 className="text-xl font-medium leading-tight text-light-text-primary-color dark:text-dark-text-primary-color md:text-2xl lg:text-3xl xl:text-4xl">{title}</h3>
      </div>
      <a
        className={clsx('flex rounded-md w-4/5 lg:w-3/5 mx-auto relative', { 'lg:ml-auto lg:mr-0': index % 2 === 1 }, { 'lg:mr-auto lg:ml-0': index % 2 === 0 })}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
      >
        <div className="absolute inset-x-0 top-0 z-10 transition-all rounded-md backdrop-filter backdrop-grayscale hover:backdrop-grayscale-0 lg:inset-0 bottom-4 bg-dark-text-secondary-color bg-opacity-30 hover:bg-opacity-0" />
        <Image data={image} />
      </a>
      <div
        className={clsx(
          'z-20 pointer-events-none flex flex-col w-full lg:w-3/5 h-full lg:h-auto lg:absolute top-1/2 transform lg:-translate-y-1/2 text-center',
          { 'left-auto right-0 lg:text-right': index % 2 === 0 },
          { 'left-0 right-auto lg:text-left': index % 2 === 1 }
        )}
      >
        <div
          className={clsx(
            'w-1/4 lg:w-2/3 hidden lg:flex flex-wrap justify-between items-center mb-6',
            { 'ml-auto flex-row-reverse pl-4': index % 2 === 0 },
            { 'ml-0 flex-row pr-4': index % 2 === 1 }
          )}
        >
          <h3 className="text-xl font-medium leading-tight text-light-text-primary-color dark:text-dark-text-primary-color md:text-2xl lg:text-3xl xl:text-4xl">{title}</h3>
          <a className="flex mt-3 pointer-events-auto" aria-label={`${title} Link`} href={link} target="_blank" rel="noopener noreferrer">
            <i className="text-xl transition transform icon-external-link text-light-text-primary dark:text-dark-text-primary dark:hover:text-dark-text-primary-color hover:scale-125" />
          </a>
        </div>
        <div className="flex p-6 -mt-4 rounded-md shadow-light dark:shadow-dark bg-light-bg dark:bg-dark-bg-paper-color lg:mt-0">
          <p className="text-base font-normal text-light-text-primary dark:text-dark-text-primary md:text-lg lg:text-xl">{description}</p>
        </div>
        <div
          className={clsx(
            'lg:w-2/3 flex flex-wrap justify-center mt-6',
            { 'lg:ml-auto lg:justify-end lg:pl-4': index % 2 === 0 },
            { 'lg:ml-0 lg:justify-start lg:pr-4': index % 2 === 1 }
          )}
        >
          {techs.map((tech) => (
            <span
              key={tech}
              className={clsx('font-normal text-light-text-primary dark:text-dark-text-primary', { 'ml-4 first:ml-0': index % 2 === 0 }, { 'mr-4 last:mr-0': index % 2 === 1 })}
              style={{ fontSize: 'clamp(0.875rem, 0.8342rem + 0.2041vw, 1rem)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
