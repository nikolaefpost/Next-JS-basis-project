import React, {FC, useContext, KeyboardEvent} from 'react';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem } from "../../interface";
import cn from "classnames";
import Link from 'next/link';
import {useRouter} from "next/router";
import { firstLevelMenu } from '../../helpers';
import {motion} from "framer-motion";

import styles from "./menu.module.scss";

const Menu: FC = () => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible:{
            marginBottom: "20px",
            // display: "block",
            transition: {
                when: "beforeChildren",
                staggerChildren: .1
            }
        },
        hidden: {
            marginBottom: 0,
            // display: "none"
        }
    };

    const childVariants = {
        visible:{
            opacity: 1,
            height: "auto",
        },
        hidden: {
            opacity: 0,
            height: 0,
        }
    };

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => m._id.secondCategory === secondCategory?
            {...m, isOpen: !m.isOpen} : {...m, isOpen: false}));
        // setMenu && setMenu(menu.map(item=>{
        //     if (item._id.secondCategory === secondCategory){
        //         item.isOpen = !item.isOpen
        //     }else {
        //         item.isOpen = false;
        //     }
        //     return item;
        // }));
    };
    const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {

        if (key.code === "Enter" || key.code ==="Space") {
            key.preventDefault();
            openSecondLevel(secondCategory);
        };
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`} replace={false}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.active]: m.id === firstCategory
                                })}
                                >
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>

                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );

    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div  className={styles.secondBlock}>
                {menu.map(m => {
                    if(m.pages.map(p=>p.alias).includes(router.asPath.split("/")[2])) m.isOpen = true;
                    return(
                        <div key={m._id.secondCategory}>
                            <div
                                tabIndex={0}
                                onKeyDown={(key: KeyboardEvent)=>openSecondLevelKey(key, m._id.secondCategory)}
                                className={styles.secondLevel}
                                onClick={()=>openSecondLevel(m._id.secondCategory)}
                            >{m._id.secondCategory}</div>
                            <motion.div
                                layout
                                initial={m.isOpen? "visible" : "hidden"}
                                animate={m.isOpen? "visible" : "hidden"}
                                variants={variants}
                                className={cn(styles.secondLevelBlock)}
                            >
                                { buildThirdLevel(m.pages, menuItem.route, m.isOpen ?? false)}
                            </motion.div>
                        </div>
                        );
                    }
                )}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
        return (
            pages.map(p => (
                <motion.div
                    key={p.alias}
                    variants={childVariants}
                >
                    <Link href={`/${route}/${p.alias}`} >
                        <a
                            tabIndex={isOpened ? 0 : -1}
                            className={cn(styles.thirdLevel, {
                                [styles.third_active]: `/${route}/${p.alias}` === router.asPath
                            })}
                        >
                            {p.category}
                        </a>
                    </Link>
                </motion.div>

            ))
        );
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;