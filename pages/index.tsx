import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basis</title>
        <meta name="description" content="The application shows the possibilities Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.home}>
            dddd
        </div>

    </div>
  );
}