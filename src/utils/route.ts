import {RouteData} from "../container/Training";


export const routesDistance = (routes: RouteData[]) => routes.reduce((distance, route) => distance + route.distance, 0);

export const routesTime = (routes: RouteData[]) => routes.reduce((time, route) => time + route.end - route.start, 0) / 1000;

