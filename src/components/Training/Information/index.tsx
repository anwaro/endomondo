import React, {useState} from 'react';

import styles from './styles.module.scss'
import GpsIcon from "./GpsIcon";
import Detail from "./Detail";
import interpolate, {Extrapolate} from "../../../utils/interpolate";
import {RouteData, RoutePoint} from "../../../container/Training";
import {routesDistance, routesTime} from "../../../utils/route";
import {secondToTime} from "../../../utils/formatter";
import Swiper from "../../Html/Swiper";
import {getPaceForLastPoints} from "../../../services/trainingRoute";


interface InformationProps {
    location: RoutePoint;
    routes: RouteData[];
}

const Information: React.FC<InformationProps> = ({location, routes}) => {

    const distance = routesDistance(routes).toFixed(2);
    const time = secondToTime(routesTime(routes));
    const pace = secondToTime(routes.length ? getPaceForLastPoints(routes[routes.length -1 ]) : 0);

    const [poss, setPoss] = useState(100);


    const margin = interpolate(poss, [0, 100], [0, 150], Extrapolate.CLAMP);
    const fontSize = interpolate(poss, [75, 100], [45, 100], Extrapolate.CLAMP);
    const opacity = interpolate(poss, [25, 75], [0, 1], Extrapolate.CLAMP);


    return (
        <Swiper
            onChange={setPoss}
            className={styles.infoCart}
        >
            <div className={styles.row}>
                <span>BIEGANIE</span>
                <GpsIcon/>
            </div>
            <div className={styles.row} style={{marginTop: margin}}>
                <div className={styles.item}>
                    <Detail value={distance} label={"Dystans"}/>
                </div>
                <div className={styles.item}>
                    <Detail
                        valueFontSize={fontSize}
                        value={time}
                        label={"Czas trwania"}
                        className={styles.mainDetail}
                        style={{transform: `translate(-50%, -${margin}px)`}}
                    />
                    <Detail value={pace} label={"tempo"} style={{opacity}}/>
                </div>
                <div className={styles.item}>
                    <Detail value={"0"} label={"Kalorie"}/>
                </div>
            </div>
            <div className={styles.handler}/>
        </Swiper>
    )
};


export default Information;