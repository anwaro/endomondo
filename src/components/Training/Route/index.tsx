import React from 'react';
import {Layer, Source} from 'react-map-gl';
import {Feature} from "geojson";
import {RoutePoint} from "../../../container/Training";

export type Position = number[]

interface RouteProps {
    id: string,
    coordinates: RoutePoint[];
}

const Route: React.FC<RouteProps> = ({coordinates, id}) => {
    // console.log(coordinates.map(coordinate => [coordinate.longitude, coordinate.latitude]));
    const data: Feature = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: coordinates.map(coordinate => [coordinate.longitude, coordinate.latitude])
        }
    };
    return coordinates.length > 1 ? (
        <Source type="geojson" data={data}>
            <Layer
                id={id}
                type={'line'}
                source={id}
                paint={{'line-color': '#ff4411', 'line-width': 4}}
                layout={{'line-join': 'round', 'line-cap': 'round'}}
            />
        </Source>
    ) : null;
};

export default Route;