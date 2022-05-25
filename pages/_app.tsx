import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>MyTop</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
				<meta property="og:locale" content='ru_RU'/>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
