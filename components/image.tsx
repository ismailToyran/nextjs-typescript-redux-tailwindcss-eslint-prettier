import { IImage } from '@components/contentful/types/contentful';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type ImageProps = {
  data: IImage;
  className?: string | undefined;
  fixedWidth?: number | undefined;
  fixedHeight?: number | undefined;
};

const ImageContentful = ({ data, className, fixedWidth, fixedHeight }: ImageProps) => {
  const { url, title, width, height } = data;

  return (
    <Image
      src={url}
      alt={title}
      width={fixedWidth || width}
      height={fixedHeight || height}
      key={title}
      className={clsx('image rounded-md', { className })}
      // draggable="false"
      // onContextMenu={e => e.preventDefault()}
    />
  );
};

ImageContentful.defaultProps = {
  className: undefined,
  fixedWidth: undefined,
  fixedHeight: undefined
};

export default ImageContentful;
