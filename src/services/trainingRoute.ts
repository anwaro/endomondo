import length from '@turf/length';

import {RouteData, RoutePoint} from "../container/Training";
import {mSecondToPace} from "../utils/calculator";

export const calculateDistance = (coordinates: number[][]) => {
    return length({
        type: "Feature",
        geometry: {
            type: "LineString",
            coordinates
        },
        properties: {}
    })
};

export const pointIsValid = (route: RouteData, location: RoutePoint) => {
    const lastPoint = route.points[route.points.length - 1];
    const time = (location.timestamp - lastPoint.timestamp) / 1000;
    const distance = calculateDistance([
        [lastPoint.longitude, lastPoint.latitude],
        [location.longitude, location.latitude],
    ]) * 1000;
    return distance / time < 12;
};

export const addPointToRoute = (routes: RouteData[], location: RoutePoint) => {
    let last = routes[routes.length - 1];
    return pointIsValid(last, location) ?
        Object.assign([...routes], {
            [routes.length - 1]: {
                ...last,
                end: location.timestamp,
                distance: calculateDistance([...last.points, location].map(coordinate => [coordinate.longitude, coordinate.latitude])),
                points: [...last.points, location]
            }
        }) : routes;
};

export const initNewRoutePath = (routes: RouteData[], location: RoutePoint) => {
    return [...routes, {
        start: location.timestamp,
        end: location.timestamp,
        distance: 0,
        points: [location]
    }]
};

export const getPaceForLastPoints = (route: RouteData) => {
    if (route.points.length < 2) {
        return 0;
    }
    const lastPoints = route.points.slice(Math.max(route.points.length - 5, 0));
    const distance = calculateDistance(lastPoints.map(coordinate => [coordinate.longitude, coordinate.latitude])) * 1000;
    console.log(lastPoints);
    const time = (lastPoints[lastPoints.length - 1].timestamp - lastPoints[0].timestamp) / 1000;
    return mSecondToPace(distance / time)
};