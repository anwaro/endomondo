import React, {useState} from 'react';
import {geolocated, GeolocatedProps} from "react-geolocated";

import Layout from "../../components/Layout/Layout";
import Information from "../../components/Training/Information";
import Map from "../../components/Training/Map";
import Controls from "../../components/Training/Controls";
import I18n from "../../services/I18n";

interface TrainingProps extends GeolocatedProps {

}

export const STATUS = {
    LOADING: 'LOADING',
    READY: 'READY',
    STARTED: 'STARTED',
    PAUSED: 'PAUSED',
};

const Training: React.FC<TrainingProps> = (props) => {
    const [status, setStatus] = useState(STATUS.READY);

    const startClick = () => {
        if (status === STATUS.READY || status === STATUS.PAUSED) {
            setStatus(STATUS.STARTED);
        } else if (status === STATUS.STARTED) {
            setStatus(STATUS.PAUSED)
        }
    };

    const stopClick = () => {
        setStatus(STATUS.READY)
    };

    return (
        <Layout
            header={{
                title: I18n.t('training.title')
            }}
        >
            <Information/>
            <Map/>
            <Controls
                status={status}
                onCLick={startClick}
                onCLickStop={stopClick}
            />
        </Layout>
    )
};
/**
 *
 * {
    positionOptions: {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: Infinity,
    },
    watchPosition: false,
    userDecisionTimeout: null,
    suppressLocationOnMount: false,
    geolocationProvider: navigator.geolocation,
    isO
 */


export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    watchPosition: true,
})(Training);