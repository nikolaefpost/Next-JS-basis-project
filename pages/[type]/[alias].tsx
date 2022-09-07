import React from "react";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import axios from "axios";
import {ParsedUrlQuery} from "querystring";
import { withLayout } from "../../Layout/Layout";
import {MenuItem, ProductModel, TopLevelCategory, TopPageModel} from "../../interface";
import {firstLevelMenu} from "../../helpers";
import TopPageComponent from "../../page-components/TopPageComponent/TopPageComponent";


const TopPage: NextPage<TopPageProps> = ({menu, page, products, firstCategory}) => {
    // console.log(products);
    return (
        <>
            <TopPageComponent page={page} products={products} firstCategory={firstCategory}/>
        </>
    );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for(const m of firstLevelMenu){
        const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s=>s.pages.map(p=>`/${m.route}/${p.alias}`)));
    }
  return{
      paths,
      fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> =  async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
    try{
        const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",{
            firstCategory: firstCategoryItem.id
        });

        if (menu.length === 0){
            return {
                notFound: true,
            };
        }
        const { data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias);
        const { data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",{
            category: page.category,
            limit: 10
        });
        return{
            props:{
                menu,
                page,
                products,
                firstCategory: firstCategoryItem.id
            }
        };
    }catch {
        return {
            notFound: true,
        };
    }

};

interface TopPageProps extends Record<string, unknown>{
    menu: MenuItem[],
    page: TopPageModel,
    products: ProductModel[],
    firstCategory: TopLevelCategory
}