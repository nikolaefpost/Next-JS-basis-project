import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {Button, HTag} from "../components";


export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Basis</title>
                <meta name="description" content="The application shows the possibilities Next JS"/>
                <link rel="icon" href="/favicon.ico"/>
                {/*<style>*/}
                {/*    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap');*/}
                {/*</style>*/}
            </Head>
            <div className={styles.container}>

                <div className={styles.home}>
                    <HTag  tag="h1">TEXT</HTag>
                    <Button appearance="primary" >click me</Button>
                    <Button appearance="ghost">click me</Button>
                </div>
            </div>
        </>
    );
}