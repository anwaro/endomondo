import React, {useEffect, useState} from 'react';

import Layout from "../../components/Layout/Layout";
import Map from "../../components/Training/Map";
import Controls from "../../components/Training/Controls";

import I18n from "../../services/I18n";
import Information from "../../components/Training/Information";
import {addPointToRoute, initNewRoutePath} from "../../services/trainingRoute";


export const STATUS = {
    LOADING: 'LOADING',
    READY: 'READY',
    STARTED: 'STARTED',
    PAUSED: 'PAUSED',
};


export interface RoutePoint {
    timestamp: number;
    latitude: number;
    longitude: number;
}

export interface RouteData {
    start: number;
    end: number;
    distance: number;
    points: RoutePoint[];
}

const emptyLocation: RoutePoint = {
    latitude: 0,
    longitude: 0,
    timestamp: 0,
};

const Training: React.FC = () => {
    const [status, setStatus] = useState(STATUS.READY);
    const [location, setLocation] = useState<RoutePoint>(emptyLocation);
    const [routes, setRoutes] = useState<RouteData[]>([]);


    const startClick = () => {
        if (status === STATUS.READY || status === STATUS.PAUSED) {
            setStatus(STATUS.STARTED);
            setRoutes(routes => initNewRoutePath(routes, location))
        } else if (status === STATUS.STARTED) {
            setStatus(STATUS.PAUSED)
        }
    };

    useEffect(() => {
        if (status === STATUS.STARTED) {
            setRoutes(routes => addPointToRoute(routes, location));
        }
    }, [status, location]);


    const stopClick = () => {
        setStatus(STATUS.READY)
    };

    return (
        <Layout
            header={{
                title: I18n.t('training.title')
            }}
        >
            <Information
                location={location}
                routes={routes}
            />
            <Map
                onGeolocate={setLocation}
                routes={routes}
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