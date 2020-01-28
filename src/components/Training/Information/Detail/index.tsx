import React from 'react';

import styles from './styles.module.scss'

interface DetailProps {
    value: string;
    label: string;
}

const Detail: React.FC<DetailProps> = ({value, label}) => {
    return (
        <div className={styles.detail}>
            <div className={styles.value}>{value}</div>
            <div className={styles.label}>{label}</div>
        </div>
    )
};


export default Detail;