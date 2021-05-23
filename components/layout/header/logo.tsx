import Image from '@components/image';
import Link from '@components/link';
import { useStore } from '@hooks';
import { useTheme } from 'next-themes';
import React from 'react';

const Logo = () => {
  const { theme } = useTheme();
  const { settings } = useStore();
  const { logoLight, logoDark } = settings;
  const lightTheme = theme === 'light';

  return (
    <Link className="flex items-center justify-center w-12 h-12 mr-auto lg:w-14 lg:h-14 md:ml-5" href="/">
      <Image data={!lightTheme ? logoLight : logoDark} />
    </Link>
  );
};

export default Logo;
