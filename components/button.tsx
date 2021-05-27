import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type HoverButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

const HoverButton = ({ children, className, type }: HoverButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e: globalThis.MouseEvent) => {
      setHoverPosition({
        x: e.pageX - (buttonRef?.current?.offsetLeft || 0),
        y: e.pageY - (buttonRef?.current?.offsetTop || 0)
      });
    };
    window.addEventListener('mouseover', setFromEvent);
    return () => {
      window.removeEventListener('mouseover', setFromEvent);
    };
  }, []);

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'group relative flex justify-center items-center w-40 h-12 px-10 py-3 min-w-min min-h-min border border-solid border-light-text-primary dark:border-dark-text-primary hover:border-transparent dark:hover:border-dark-text-primary rounded-md overflow-hidden text-light-text-primary dark:text-dark-text-primary hover:text-white dark:hover:text-dark-text-primary transition-all duration-700 ease-in-out cursor-pointer',
        className
      )}
      ref={buttonRef}
    >
      <div
        className="group-hover:w-(hover) group-hover:pt-(hover) absolute z-1 w-0 h-0 rounded-full bg-gradient-to-l from-dark-text-primary-color to-dark-text-secondary-color transform -translate-x-1/2 -translate-y-1/2 transition-hover duration-700"
        style={{ left: hoverPosition.x, top: hoverPosition.y }}
      />
      <div className="z-10">{children}</div>
    </button>
  );
};

HoverButton.defaultProps = {
  type: 'button',
  className: undefined
};

export default HoverButton;
