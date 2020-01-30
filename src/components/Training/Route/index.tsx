import React from 'react';
import {Layer, Source} from 'react-map-gl';
import {Feature} from "geojson";

export type Position = number[]

interface RouteProps {
    coordinates: Position[];
}

const Route: React.FC<RouteProps> = ({coordinates}) => {
    const data: Feature = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates
        }
    };
    return (
        <Source type="geojson" data={data}>
            <Layer
                id={'route'}
                type={'line'}
                source={'route'}
                paint={{'line-color': '#ff4411', 'line-width': 4}}
                layout={{'line-join': 'round', 'line-cap': 'round'}}
            />
        </Source>
    )
};

export default Route;