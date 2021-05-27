import React, { ReactNode } from 'react';

type ErrorProps = {
  children: ReactNode;
};

const Error = ({ children }: ErrorProps) => <div className="mb-2 text-sm text-light-error dark:text-dark-error">{children}</div>;

export default Error;
