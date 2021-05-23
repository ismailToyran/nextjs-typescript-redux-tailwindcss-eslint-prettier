import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html className="dark" lang={this.props.locale || 'en'}>
        <Head />
        <body>
          <noscript
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
