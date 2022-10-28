import React, {FC} from 'react';
import { TopPageModel as AdvantagesProps} from "../../interface";
import CheckIcon from "./check.svg";
import {motion} from "framer-motion";
import styles from "./advantages.module.scss";
import {HTag, PTag} from "../index";

const Advantages:FC<AdvantagesProps> = ({advantages,seoText}) => {
    return (
        <div
            className={styles.content}
        >
            <HTag tag="h2">Преимущества</HTag>
            {advantages.map(item=>(
                <motion.div
                    className={styles.advantages_block}
                    key={item._id}
                    initial={{ opacity: 0, marginLeft: -200 }}
                    whileInView={{ opacity: 1, marginLeft: 0}}
                    viewport={{ once: true }}
                    transition={{ delay: .5 }}
                >
                    <CheckIcon/>
                    <PTag className={styles.title}>{item.title}</PTag>
                    <div className={styles.empty}/>
                    <PTag className={styles.description}>{item.description}</PTag>
                </motion.div>
            ))}
            <div className={styles.footer_block} dangerouslySetInnerHTML={{__html: seoText}} />

        </div>
    );
};

export default Advantages;