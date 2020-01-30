import React, {useState} from 'react';

import Layout from "../../components/Layout/Layout";
import Map from "../../components/Training/Map";
import Controls from "../../components/Training/Controls";

import I18n from "../../services/I18n";


export const STATUS = {
    LOADING: 'LOADING',
    READY: 'READY',
    STARTED: 'STARTED',
    PAUSED: 'PAUSED',
};

const emptyLocation: Coordinates = {
    latitude: 0,
    longitude: 0,
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
};

const Training: React.FC = () => {
    const [status, setStatus] = useState(STATUS.READY);
    const [location, setLocation] = useState<Coordinates>(emptyLocation);
    const [route, setRoute] = useState<number[][]>([]);

    const startClick = () => {
        if (status === STATUS.READY || status === STATUS.PAUSED) {
            setStatus(STATUS.STARTED);
        } else if (status === STATUS.STARTED) {
            setStatus(STATUS.PAUSED)
        }
    };

    const onGeolocate = (location: Coordinates, timestamp: number) => {
        setLocation(location);
        setRoute(points => [...points, [ location.longitude, location.latitude]]);

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
            {/*<Information*/}
            {/*    location={location}*/}
            {/*/>*/}
            <Map
                onGeolocate={onGeolocate}
                route={route}
            />
            <Controls
                status={status}
                onCLick={startClick}
                onCLickStop={stopClick}
            />
        </Layout>
    )
};

export default Training;