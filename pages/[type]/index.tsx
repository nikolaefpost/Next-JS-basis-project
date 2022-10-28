import React, {useContext, useEffect} from "react";
import {withLayout} from "../../Layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import axios from "axios";
import {MenuItem,  TopLevelCategory} from "../../interface";
import {firstLevelMenu} from "../../helpers";
import {ParsedUrlQuery} from "querystring";
import {AppContext} from "../../context/app.context";
import {API} from "../../helpers/api";

const Type: NextPage<TypeProps> = ({firstCategory, menu}) => {
    const { setMenu} = useContext(AppContext);
    useEffect(()=>{
        setMenu &&  setMenu(menu);
    },[menu]);
    return (
        <>
            Courses: {firstCategory}
        </>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return{
        paths: firstLevelMenu.map(m => "/" + m.route),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<TypeProps> =  async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {

    if(!params){
        return {
            notFound: true,
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
    if(!firstCategoryItem){
        return {
            notFound: true,
        };
    }

    const { data: menu} = await axios.post<MenuItem[]>(API.topPage.find,{
        firstCategory: firstCategoryItem.id
    });
    return{
        props:{
            menu,
            firstCategory: firstCategoryItem.id
        }
    };
};

interface TypeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: TopLevelCategory
}