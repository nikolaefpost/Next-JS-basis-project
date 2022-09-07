import React, {useState} from "react";
import Head from 'next/head';
import {Button, HTag, PTag, Tag, Rating} from "../components";
import {withLayout} from "../Layout/Layout";
import {GetStaticProps, NextPage} from "next";
import axios from "axios";
import styles from '../styles/Home.module.scss';
import {MenuItem, TopPageModel} from "../interface";

const Search: NextPage = () => {

    return (
        <>
            Search
        </>
    );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {

    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find", {
        firstCategory
    });
    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/big-data");
    return {
        props: {
            menu,
            page,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    page: TopPageModel,
    firstCategory: number
}