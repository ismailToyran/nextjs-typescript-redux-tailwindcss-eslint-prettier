import { HomepageQuery, LanguageQuery, SettingsQuery } from '@components/contentful/query';
import { IHomepageFields, ILanguageFields, ISettingsFields } from '@components/contentful/types/contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const fetchContent = async (query: any) => {
  try {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify({ query })
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    throw new Error(`There was a problem retrieving entries with the query ${query} \r\n${error}`);
  }
};

const getHomepageData = async (locale: string | undefined) => {
  const { homepageCollection } = await fetchContent(HomepageQuery(locale));
  const data: IHomepageFields = homepageCollection.items[0] || {};
  return data;
};

const getLanguageData = async (locale: string | undefined) => {
  const { languageCollection } = await fetchContent(LanguageQuery(locale));
  const data: ILanguageFields = languageCollection.items[0] || {};
  return data;
};

const getSettingsData = async (locale: string | undefined) => {
  const { settingsCollection } = await fetchContent(SettingsQuery(locale));
  const data: ISettingsFields = settingsCollection.items[0] || {};
  return data;
};

export { getHomepageData, getLanguageData, getSettingsData };
