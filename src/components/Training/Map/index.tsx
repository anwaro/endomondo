import React, {useState} from 'react';
import ReactMapGL, {GeolocateControl, NavigationControl} from 'react-map-gl';


const Map: React.FC = () => {
    const [viewport, setViewport] = useState({zoom: 12});
    return (
        <div style={{height: '100%', width: '100%'}}>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={'pk.eyJ1IjoiYW53YXJvIiwiYSI6ImNrNXRrM21seTBsdjMzaGxvbHQ1ejNvMnAifQ.3MMrJCdLnp2flaxFF3a9ow'}
                width="100%"
                height="100%"
                onViewportChange={(viewport: any) => setViewport(viewport)}
            >
                <div style={{position: 'absolute', right: 0}}>
                    <NavigationControl/>
                    <GeolocateControl
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                        // @ts-ignore
                        onGeolocate={console.log}
                    />
                </div>
            </ReactMapGL>
        </div>
    )
};

export default Map;