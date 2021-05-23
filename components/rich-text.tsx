import { IAssets, IRichText } from '@components/contentful/types/contentful';
import Image from '@components/image';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useStore } from '@hooks';
import React from 'react';

const RichText = ({ json }: IRichText) => {
  const { assets } = useStore();
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="mb-2 text-light-text-primary-color dark:text-dark-text-primary-color md:mb-3 lg:mb-4">{text}</span>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="mt-1.5 lg:mt-2">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="mt-1.5 lg:mt-2">{children}</ol>,
      [BLOCKS.HR]: () => <hr className="mt-6 mb-3 border-light-text-primary-color dark:border-dark-text-primary-color lg:mt-8 lg:mb-4" />,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="inline-flex w-72">
          <i className="icon-down transform -rotate-90 text-xl text-light-text-primary-color dark:text-dark-text-primary-color mr-0.5" />
          {children}
        </li>
      ),
      [INLINES.HYPERLINK]: ({ data }: any, children) => (
        <a href={data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assets.find((item: IAssets) => node.data.target.sys.id === item.sys.id);
        if (asset) {
          return <Image data={asset} />;
        }
        return false;
      }
    }
  };
  return <div className="text-center lg:text-left">{documentToReactComponents(json, options)}</div>;
};

export default RichText;
