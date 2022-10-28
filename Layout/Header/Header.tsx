import React, {FC, useEffect, useState} from 'react';
import {HeaderProps} from "./Header.props";
import cn from "classnames";
import Logo from "../logo.svg";
import {ButtonIcon} from '../../components';
import {motion} from 'framer-motion';
import Sidebar from "../Sidebar/Sidebar";
import {useRouter} from "next/router";
import styles from "./Header.module.scss";


const Header: FC<HeaderProps> = ({className, ...props}) => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    const variants = {
        opened: {
            opacity: 1,
            left: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            left: "100%",
        }
    };

    useEffect(() => {
        setIsOpened(false)
    }, [router])

    return (
        <header className={cn(className, styles.header)} {...props} >
            <Logo/>
            <ButtonIcon
                icon="menuIcon"
                appearance="white"
                onClick={() => setIsOpened(true)}
            />
            <motion.div
                className={styles.mobile_menu}
                variants={variants}
                initial="closed"
                animate={isOpened ? "opened" : "closed"}
            >
                <Sidebar/>
                {isOpened && <ButtonIcon
                    className={styles.menu_close}
                    appearance="white"
                    icon="crossIcon"
                    onClick={() => setIsOpened(false)}

                />}
            </motion.div>
        </header>
    );
};

export default Header;