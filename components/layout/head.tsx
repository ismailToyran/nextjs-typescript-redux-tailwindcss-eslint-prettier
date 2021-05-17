import { IMetaFields } from '@components/contentful/types/contentful';
import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
  meta: IMetaFields;
};

const CustomHead = ({ meta, children }: Props) => {
  const { title, description, image } = meta;
  return (
    <Head>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5SD9ZLJ');`
        }}
      />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />

      <title>{title}</title>
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="msapplication-navbutton-color" content="#171f24" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#171f24" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" type="image/x-icon" sizes="48x48" href="/app-icons/icons/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/app-icons/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/app-icons/icons/favicon-96x96.png" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="120x120"
        href="/app-icons/icons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="/app-icons/icons/apple-touch-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="192x192"
        href="/app-icons/icons/apple-touch-icon-192x192.png"
      />
      <link rel="mask-icon" href="/app-icons/icons/safari-pinned-tab.svg" color="#449ddb" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@iToyran" />
      <meta name="twitter:creator" content="@iToyran" />
      <meta name="twitter:url" content="https://ismailtoyran.com" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
      <meta name="twitter:image:alt" content={title} />

      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://ismailtoyran.com" />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:secure_url" content={image.url} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="tr_TR" />
      <meta property="fb:app_id" content="961933464318612" />

      {children}
    </Head>
  );
};

export default CustomHead;
