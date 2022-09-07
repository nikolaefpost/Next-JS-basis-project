import React, {FC, useReducer} from 'react';
import {TopPageComponentProps} from './TopPageComponent.props';
import {Advantages, HTag, Skills, Sort, Tag} from "../../components";

import styles from "./TopPageComponent.module.scss"
import HHData from "../../components/HHData/HHData";
import {TopLevelCategory} from "../../interface";
import {sortReducer} from "./sort.reduser";
import { SortEnum } from '../../components/Sort/sort.props';


const TopPageComponent: FC<TopPageComponentProps> = ({page, products, firstCategory}) => {
    const [{products: sortedProducts, sort}, dispatchSort]= useReducer(sortReducer, {sort: SortEnum.Rating, products});
    // console.log(sortedProducts);
    
    const onHandledSort = (sort: SortEnum) => {
      dispatchSort({type: sort});
    };
    

    return (
        <div className={styles.page_component}>
            <div className={styles.title}>
                <HTag tag="h1">{page.title}</HTag>
                {products && <Tag color="grey" size="l">{ products.length}</Tag>}
                <Sort setSort={onHandledSort} sort={sort}/>
            </div>
            <div className={styles.product}>
                {products && products.map(item=>(
                    <div key={item._id}>{item.title}</div>
                ))}
            </div>
            <div className={styles.hh_title}>
                <HTag tag="h2">Вакансии - {page.category}</HTag>
               <Tag color="red" size="l">hh.ru</Tag>
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh}/>}
            {page.advantages?.length && <Advantages {...page}/>}
            {page.tags && <Skills {...page} />}

        </div>
    );
};

export default TopPageComponent;