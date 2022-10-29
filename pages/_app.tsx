import type { AppProps } from "next/app";
import Head from "next/head";
import React, {useEffect} from "react";
import ym, {YMInitializer } from 'react-yandex-metrika';

import '../styles/globals.css';



function MyApps({ Component, pageProps, router }: AppProps): JSX.Element {

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined") {
        ym("hit", url);
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  return <>
    <Head>
      <title>Next-basic</title>
      <meta name="description" content="The application shows the possibilities Next JS"/>
      <link rel="icon" href="/fav.ico"/>
      <link rel="preconnect" href="https://mc.yandex.ru"/>

      <meta property="og:url"  content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
      <meta property="og:locale"  content="ru_Ru"/>
    </Head>
    <YMInitializer
        accounts={[]}
        options={{webvisor: true, defer: true}}
        version="2"
    />
    <Component {...pageProps} />;
  </>;
}

export default MyApps;