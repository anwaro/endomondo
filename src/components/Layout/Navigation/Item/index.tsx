import React from 'react';
import {Link} from "react-router-dom";

import styles from './styles.module.scss'


export interface ItemProps {
    title: string;
    icon: string;
    activeIcon: string;
    to: string;
    active: boolean;
}

const Item: React.FC<ItemProps> = ({title, to, active, activeIcon, icon}) => {
    return (
        <Link to={to} className={[styles.navItem, active ? styles.active : ''].join(' ')}>
            <img className={styles.navIcon} src={active ? activeIcon : icon} alt={title}/>
            <div className={styles.navLabel}>{title}</div>
        </Link>
    );
};


export default Item;