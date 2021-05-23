import React from 'react';

type ScrollDownProps = {
  onClick: () => void;
};

const ScrollDown = ({ onClick }: ScrollDownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="48.852"
    viewBox="0 0 30 48.852"
    className="absolute z-50 h-16 transform -translate-x-1/2 cursor-pointer fill-current scroll-down text-light-text-primary-color dark:text-dark-text-primary-color bottom-8 md:bottom-24 lg:bottom-8 left-1/2"
    onClick={onClick}
  >
    <g transform="translate(-699.39 52.56)">
      <path className="animate-pulse1" d="M714.39-36.146l-14.707-14.708a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l13.293 13.293 13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
      <path className="animate-pulse2" d="M714.39-19.927l-14.707-14.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l13.293 13.293 13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
      <path className="animate-pulse3" d="M714.39-3.708l-14.707-14.707a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0L714.39-6.536l13.293-13.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414z" />
    </g>
  </svg>
);

export default ScrollDown;
