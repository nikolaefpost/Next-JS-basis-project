import React, {FC, FunctionComponent} from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import {LayoutProps} from "./Layout.props";

import styles from "./Layout.module.scss";


const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer}/>

        </div>
    );
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};