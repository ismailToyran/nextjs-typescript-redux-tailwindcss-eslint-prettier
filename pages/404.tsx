import { getCustom404Data, getLanguageData, getSettingsData } from '@components/contentful/api';
import { ICustom404Fields } from '@components/contentful/types/contentful';
import Layout from '@components/layout';
import Link from '@components/link';
import { RECEIVE_LANGUAGE, RECEIVE_SETTINGS, wrapper } from '@components/store';
import { GetStaticProps } from 'next';
import React from 'react';

type Custom404Props = {
  data: ICustom404Fields;
};

const Custom404 = ({ data }: Custom404Props) => {
  const { meta, title, button } = data;
  return (
    <Layout meta={meta}>
      <div className="flex flex-col items-center justify-center w-full h-screen m-auto">
        <h1 className="font-bold tracking-wide text-center text-light-text-primary-color dark:text-dark-text-primary-color text-9xl">
          <span className="inline-block animate-float dark:animate-float-dark">4</span>
          <span className="inline-block animate-float dark:animate-float-dark" style={{ animationDelay: '500ms' }}>
            0
          </span>
          <span className="inline-block animate-float dark:animate-float-dark" style={{ animationDelay: '1000ms' }}>
            4
          </span>
        </h1>
        <p className="text-lg font-normal leading-relaxed text-center text-light-text-primary dark:text-dark-text-primary">{title}</p>
        <p className="text-lg font-normal leading-relaxed text-center text-light-text-primary dark:text-dark-text-primary">
          <Link className="text-light-text-primary-color dark:text-dark-text-primary-color hover:underline" href="/">
            {button}
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async ({ preview = false, locale }) => {
  // console.log('2. Page.getStaticProps uses the store to dispatch things');
  const languageData = await getLanguageData(locale);
  const settingsData = await getSettingsData(locale);
  const data = await getCustom404Data(locale);
  store.dispatch({ type: RECEIVE_LANGUAGE, payload: languageData });
  store.dispatch({ type: RECEIVE_SETTINGS, payload: settingsData });
  return {
    props: { preview, data }
  };
});

export default Custom404;
