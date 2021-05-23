import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties, ReactNode } from 'react';

type CustomLinkProps = LinkProps & {
  children: ReactNode;
  style?: CSSProperties;
  className?: string | undefined;
};

const CustomLink = ({ children, style, className, ...props }: CustomLinkProps) => {
  const { href, ...linkProps } = props;
  const { locale } = useRouter();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href} locale={locale} {...linkProps}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} style={style}>
        {children}
      </a>
    </Link>
  );
};

CustomLink.defaultProps = {
  className: undefined,
  style: undefined
};

export default CustomLink;
