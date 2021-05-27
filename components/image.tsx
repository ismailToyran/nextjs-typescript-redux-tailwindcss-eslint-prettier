import { IImage } from '@components/contentful/types/contentful';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type CommonImageProps = {
  data: IImage;
  className?: string | undefined;
  layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill';
};

type ConditionalImageProps =
  | {
      layout: 'intrinsic' | 'fixed' | 'responsive';
      objectFit: undefined;
      objectPosition: undefined;
    }
  | {
      layout: 'fill';
      objectFit?: 'contain' | 'cover' | 'none';
      objectPosition?: 'left' | 'center' | 'right';
    };

type ImageContentfulProps = CommonImageProps & ConditionalImageProps;

const ImageContentful = ({ data, className, layout, objectFit, objectPosition }: ImageContentfulProps) => {
  const { url, title, width, height } = data;

  if (layout === 'fill') {
    return (
      <Image
        src={url}
        alt={title}
        key={title}
        layout="fill"
        objectFit={objectFit || 'contain'}
        objectPosition={objectPosition || 'center'}
        className={clsx('image rounded-md', className)}
        // draggable="false"
        // onContextMenu={e => e.preventDefault()}
      />
    );
  }

  return (
    <Image
      src={url}
      alt={title}
      width={width}
      height={height}
      key={title}
      layout={layout}
      className={clsx('image rounded-md', className)}
      // draggable="false"
      // onContextMenu={e => e.preventDefault()}
    />
  );
};

ImageContentful.defaultProps = {
  className: undefined,
  layout: 'intrinsic'
};

export default ImageContentful;
