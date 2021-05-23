import { useStore } from '@hooks';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const { mobileMenu } = useStore();
  return (
    <div className={clsx('max-w-8xl w-full h-full mx-auto px-6 sm:px-12 md:px-24 lg:px-36 transition-all duration-300', { 'filter blur-sm brightness-75': mobileMenu })}>
      {children}
    </div>
  );
};

export default Container;
