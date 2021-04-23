import { TOGGLE_MOBILE_MENU, wrapper } from '@components/store';
import { useStore } from '@hooks';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Home: NextPage = () => {
  const { mobileMenu, toggleMobileMenu } = useStore();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-20 flex-1">
        <h1 className="text-[4rem] leading-[1.15] text-center">
          Welcome to{' '}
          <a className="text-[#0070f3] hover:underline focus:underline active:underline" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="text-center text-2xl leading-6">
          Get started by editing <code className="bg-[#fafafa] rounded-md p-3 text-lg font-mono">pages/index.js</code>
        </p>

        <button type="button" onClick={toggleMobileMenu}>
          Tıkla
        </button>
        <p className="text-center text-2xl leading-6">State is currently {`${mobileMenu}`}</p>

        <div className="md:w-auto w-full md:flex-row flex-col flex items-center justify-center flex-wrap max-w-[800px] mt-12">
          <a
            href="https://nextjs.org/docs"
            className="m-4 w-[45%] p-6 border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3] transition-colors"
          >
            <h2 className="mb-4 text-base">Documentation &rarr;</h2>
            <p className="text-xl">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 w-[45%] p-6 border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3] transition-colors"
          >
            <h2 className="mb-4 text-base">Learn &rarr;</h2>
            <p className="text-xl">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 w-[45%] p-6 border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3] transition-colors"
          >
            <h2 className="mb-4 text-base">Examples &rarr;</h2>
            <p className="text-xl">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 w-[45%] p-6 border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3] transition-colors"
          >
            <h2 className="mb-4 text-base">Deploy &rarr;</h2>
            <p className="text-xl">Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className="flex justify-center items-center w-full h-24 border-t border-[#eaeaea]">
        <a
          className="flex justify-items-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  // console.log('2. Page.getStaticProps uses the store to dispatch things');
  store.dispatch({ type: TOGGLE_MOBILE_MENU, payload: true });
});

export default Home;
