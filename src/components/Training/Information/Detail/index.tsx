import React, {HTMLAttributes} from 'react';

import styles from './styles.module.scss'
import {joinClass} from "../../../../utils/joinClass";

interface DetailProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    label: string;
    valueFontSize?: number;
}

const Detail: React.FC<DetailProps> = ({value, label, className = '', valueFontSize = 45, ...restParams}) => {
    return (
        <div className={joinClass(styles.detail, className)} {...restParams}>
            <div className={styles.value} style={{fontSize: valueFontSize}}>{value}</div>
            <div className={styles.label}>{label}</div>
        </div>
    )
};


export default Detail;