import LeftLine from '@components/layout/left-side/left-line';
import Socials from '@components/layout/left-side/socials';
import React from 'react';

const SideTopLeft = () => (
  <div className="fixed top-0 z-10 hidden w-10 md:block left-5 lg:left-10">
    <LeftLine />
    <Socials />
  </div>
);

export default SideTopLeft;
