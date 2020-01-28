import React from 'react';

import Header, {HeaderProps} from "../Header";
import Navigation, {NavigationProps} from "../Navigation";

import styles from './styles.module.scss'


interface HeadProps {
    header?: HeaderProps;
    nav?: NavigationProps;
}

const Layout: React.FC<HeadProps> = (
    {
        header = {},
        nav = {},
        children
    }
) => {
    return (
        <div className={styles.app}>
            <Header {...header}/>
            <main className={styles.main}>
                {children}
            </main>
            <Navigation {...nav}/>
        </div>
    );
};


export default Layout;