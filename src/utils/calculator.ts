/** Convert speed (m/s) to pace (sec/km) */
export const mSecondToPace = (speed: number) => {
    return speed === 0 ? 0 : 1000 / speed;
};

/** Convert speed m/s to km/h */
export const mSecondToKmHour = (speed: number) => {
    return speed * 3.6;
};

/** Convert speed km/h to m/s*/
export const kmHourToMSecond = (speed: number) => {
    return speed / 3.6;
};

/** Convert pace (sec/km) to speed (m/s) */
export const paceToMSecond = (pace: number) => {
    return pace === 0 ? 0 : 1000 / pace;
};
