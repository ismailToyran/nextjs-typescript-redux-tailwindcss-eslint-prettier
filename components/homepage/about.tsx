import { IImage, IRichText } from '@components/contentful/types/contentful';
import Image from '@components/image';
import RichText from '@components/rich-text';
import Section from '@components/section';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type AboutProps = {
  richText: IRichText;
  authorImage: IImage;
};

const motionJson = {
  hidden: {
    y: 200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  }
};

const motionImage = {
  hidden: {
    x: 200,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  },
  exit: {
    x: 200,
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.7
    }
  }
};

const About = ({ richText, authorImage }: AboutProps) => {
  const jsonControl = useAnimation();
  const imageControl = useAnimation();

  const [jsonRef, jsonInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });

  useEffect(() => {
    jsonInView ? jsonControl.start('visible') : jsonControl.start('hidden');
    imageInView ? imageControl.start('visible') : imageControl.start('hidden');
  }, [jsonControl, jsonInView, imageInView, imageControl]);

  return (
    <Section id="about" index={1}>
      <div className="flex flex-col lg:flex-row">
        <motion.div className="flex order-last lg:flex-1 lg:pr-16 lg:order-first" ref={jsonRef} variants={motionJson} initial="hidden" animate={jsonControl} exit="exit">
          <RichText json={richText.json} />
        </motion.div>
        <motion.div
          className="relative flex mx-auto mb-6 overflow-hidden cursor-pointer w-80 xl:w-96 h-80 xl:h-96 lg:mx-0 lg:mb-8"
          ref={imageRef}
          variants={motionImage}
          initial="hidden"
          animate={imageControl}
          exit="exit"
        >
          <div className="absolute inset-0 z-10 transition-all rounded-md backdrop-filter backdrop-grayscale hover:backdrop-grayscale-0 bg-dark-text-secondary-color bg-opacity-30 hover:bg-opacity-0" />
          <Image data={authorImage} layout="fill" />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
