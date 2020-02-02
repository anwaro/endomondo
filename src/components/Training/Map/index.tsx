import React, {useState} from 'react';
import ReactMapGL, {GeolocateControl, NavigationControl} from 'react-map-gl';

import Route from "../Route";
import {RouteData, RoutePoint} from "../../../container/Training";

interface MapProps {
    onGeolocate: (location: RoutePoint) => void;
    routes: RouteData[];
}


const Map: React.FC<MapProps> = ({onGeolocate, routes}) => {
    const [viewport, setViewport] = useState({zoom: 12});

    // console.log(routes);

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYW53YXJvIiwiYSI6ImNrNXRrM21seTBsdjMzaGxvbHQ1ejNvMnAifQ.3MMrJCdLnp2flaxFF3a9ow'}
            width="100%"
            height="100%"
            onViewportChange={(viewport: any) => setViewport(viewport)}
            mapStyle={'mapbox://styles/mapbox/streets-v11'}
        >
            {routes.map(route => (
                <Route id={`route${route.start}`} key={route.start} coordinates={route.points}/>
            ))}

            <div style={{position: 'absolute', right: 0, bottom: '70px'}}>
                <NavigationControl/>
            </div>

            <GeolocateControl
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                showUserLocation={true}
                // @ts-ignore
                onGeolocate={({coords: {latitude, longitude}, timestamp}) => onGeolocate({
                    latitude,
                    longitude,
                    timestamp
                })}
                style={{position: 'absolute', left: 0, bottom: '70px'}}
            />
        </ReactMapGL>
    )
};

export default Map;