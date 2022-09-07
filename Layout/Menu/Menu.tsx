import React, {FC, useContext} from 'react';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem } from "../../interface";
import cn from "classnames";
import Link from 'next/link';
import {useRouter} from "next/router";
import { firstLevelMenu } from '../../helpers';

import styles from "./menu.module.scss";

const Menu: FC = () => {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

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
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    // if(m.pages.map(p=>p.alias).includes(router.asPath.split("/")[2])) m.isOpen = true;
                    return(
                        <div key={m._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={()=>openSecondLevel(m._id.secondCategory)}
                            >{m._id.secondCategory}</div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.open]: m.isOpen
                            })}>
                                { buildThirdLevel(m.pages, menuItem.route)}
                            </div>

                        </div>
                        );
                    }

                )}

            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} key={p.alias}>
                    <a
                        className={cn(styles.thirdLevel, {
                            [styles.third_active]: `/${route}/${p.alias}` === router.asPath
                        })}
                    >
                        {p.category}
                    </a>
                </Link>
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