import React from 'react';

import styles from './styles.module.scss'


export interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({title = ''}) => {
    return (
        <div className={styles.header}>
            <span>{title}</span>
        </div>
    );
};


export default Header;