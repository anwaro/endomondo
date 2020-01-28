import React from 'react';

import I18n from "../../../services/I18n";

import styles from './styles.module.scss'
import GpsIcon from "./GpsIcon";
import Detail from "./Detail";

const Information: React.FC = () => {
    return (
        <div className={styles.infoCart}>
            <div className={styles.row}>
                <span>BIEGANIE</span>
                <GpsIcon/>
            </div>
            <Detail value={"0:00"} label={"Czas trwania"}/>
            <div className={styles.row}>
                <div className={styles.item}>
                    <Detail value={"0.00"} label={"Dystans"}/>
                </div>
                <div className={styles.item}>
                    <Detail value={"0:00"} label={"trmpo"}/>
                </div>
                <div className={styles.item}>
                    <Detail value={"0"} label={"Kalorie"}/>
                </div>
            </div>
        </div>
    )
};


export default Information;