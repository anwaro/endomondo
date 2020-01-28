import React from 'react';
import ReactMapboxGl, {Layer, Feature} from 'react-mapbox-gl';

import I18n from "../../../services/I18n";

const MapboxMap = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiYW53YXJvIiwiYSI6ImNrNXRrM21seTBsdjMzaGxvbHQ1ejNvMnAifQ.3MMrJCdLnp2flaxFF3a9ow'
});

const Map: React.FC = () => {
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MapboxMap
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100%',
                    width: '100%'
                }}
            >
                <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                </Layer>
            </MapboxMap>
        </div>
    )
};


export default Map;