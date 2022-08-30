import React, {useState} from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import {Button, HTag, PTag, Tag, Rating} from "../components";
import {withLayout} from "../Layout/Layout";


function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(3)
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

            <div className={styles.home}>
                <HTag tag="h1">TEXT</HTag>
                <Button appearance="primary">click me</Button>
                <Button appearance="ghost" arrow direction="down">click me</Button>
                <PTag fontSize={18}>
                    Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills —
                    навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и
                    маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.
                </PTag>
                <div>
                    <Tag color="green" size="s">BUY</Tag>
                    <Tag color="ghost" size="l">BUY</Tag>
                    <Tag color="grey" size="s">BUY</Tag>
                    <Tag color="red" size="l">BUY</Tag>
                    <Tag color="primary" size="s">BUY</Tag>
                    <Tag color="green" size="l">BUY</Tag>
                </div>
                <Rating rating={rating} setRating={setRating} isEditable/>

            </div>
        </>
    );
}

export default withLayout(Home);