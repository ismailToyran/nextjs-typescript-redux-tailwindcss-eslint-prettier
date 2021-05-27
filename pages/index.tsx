import { getAssetsData, getHomepageData, getLanguageData, getSettingsData } from '@components/contentful/api';
import { IHomepageFields } from '@components/contentful/types/contentful';
import About from '@components/homepage/about';
import Contact from '@components/homepage/contact';
import Hero from '@components/homepage/hero';
import Projects from '@components/homepage/projects';
import Layout from '@components/layout';
import { RECEIVE_ASSETS, RECEIVE_LANGUAGE, RECEIVE_SETTINGS, wrapper } from '@components/store';
import { GetStaticProps } from 'next';
import React from 'react';

type HomepageProps = {
  data: IHomepageFields;
};

const Homepage = ({ data }: HomepageProps) => {
  const { meta, heroKeywords, about, authorImage, projectListCollection } = data;
  return (
    <Layout meta={meta}>
      <Hero data={heroKeywords} />
      <About richText={about} authorImage={authorImage} />
      <Projects data={projectListCollection.items} />
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps((store) => async ({ preview = false, locale }) => {
  // console.log('2. Page.getStaticProps uses the store to dispatch things');
  const languageData = await getLanguageData(locale);
  const settingsData = await getSettingsData(locale);
  const assetsData = await getAssetsData();
  const data = await getHomepageData(locale);
  store.dispatch({ type: RECEIVE_LANGUAGE, payload: languageData });
  store.dispatch({ type: RECEIVE_SETTINGS, payload: settingsData });
  store.dispatch({ type: RECEIVE_ASSETS, payload: assetsData });
  return {
    props: { preview, data }
  };
});

export default Homepage;
