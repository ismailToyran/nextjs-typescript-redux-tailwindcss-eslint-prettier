import RightLine from '@components/layout/right-side/right-line';
import ThemeToggle from '@components/layout/right-side/theme-toggle';
import React from 'react';

const RightSide = () => (
  <div className="fixed bottom-0 z-10 hidden w-10 md:block right-5 lg:right-10">
    <ThemeToggle rotate />
    <RightLine />
  </div>
);

export default RightSide;
