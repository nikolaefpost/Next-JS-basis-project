import React, {FC} from 'react';
import { TopPageModel as AdvantagesProps} from "../../interface";
import CheckIcon from "./check.svg";

import styles from "./advantages.module.scss";
import {HTag, PTag} from "../index";

const Advantages:FC<AdvantagesProps> = ({advantages,seoText}) => {
    return (
        <div className={styles.content}>
            <HTag tag="h2">Преимущества</HTag>
            {advantages.map(item=>(
                <div className={styles.advantages_block} key={item._id}>
                    <CheckIcon/>
                    <PTag className={styles.title}>{item.title}</PTag>
                    <div className={styles.empty}/>
                    <PTag className={styles.description}>{item.description}</PTag>
                </div>
            ))}
            <div className={styles.footer_block} dangerouslySetInnerHTML={{__html: seoText}} />

        </div>
    );
};

export default Advantages;