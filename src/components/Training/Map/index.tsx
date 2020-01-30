import React, {useState} from 'react';
import ReactMapGL, {GeolocateControl, NavigationControl} from 'react-map-gl';
import Route from "../Route";

interface MapProps {
    onGeolocate: (location: Coordinates, timestamp: number) => void;
    route: number[][];
}


const Map: React.FC<MapProps> = ({onGeolocate, route}) => {
    const [viewport, setViewport] = useState({zoom: 12});

    console.log(route);
    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYW53YXJvIiwiYSI6ImNrNXRrM21seTBsdjMzaGxvbHQ1ejNvMnAifQ.3MMrJCdLnp2flaxFF3a9ow'}
            width="100%"
            height="100%"
            onViewportChange={(viewport: any) => setViewport(viewport)}
            mapStyle={'mapbox://styles/mapbox/streets-v11'}
        >
            <Route coordinates={route}/>

            <div style={{position: 'absolute', right: 0, bottom: '70px'}}>
                <NavigationControl/>
            </div>

            <GeolocateControl
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                showUserLocation={true}
                // @ts-ignore
                onGeolocate={({coords, timestamp}) => onGeolocate(coords, timestamp)}
                style={{position: 'absolute', left: 0, bottom: '70px'}}
            />
        </ReactMapGL>
    )
};

export default Map;