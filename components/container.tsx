import { useStore } from '@hooks';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const { mobileMenu } = useStore();
  return (
    <div
      className={`max-w-8xl w-full h-full mx-auto px-6 lg:px-36 md:px-24 sm:px-12 transition-all duration-300${
        mobileMenu && ' filter blur-sm brightness-75'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
