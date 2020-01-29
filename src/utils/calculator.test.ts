import {mSecondToPace, mSecondToKmHour, kmHourToMSecond, paceToMSecond} from "./calculator";

test('convert m/s to pace', () => {
    expect(mSecondToPace(3)).toBeCloseTo(333.3333);
    expect(mSecondToPace(0)).toBe(0);
});

test('convert m/s to km/h', () => {
    expect(mSecondToKmHour(3)).toBeCloseTo(10.8);
    expect(mSecondToKmHour(0)).toBe(0);
});

test('convert km/h to m/s', () => {
    expect(kmHourToMSecond(15)).toBeCloseTo(4.166);
    expect(kmHourToMSecond(0)).toBe(0);
});

test('convert pace to m/s', () => {
    expect(paceToMSecond(240)).toBeCloseTo(4.1666);
    expect(paceToMSecond(0)).toBe(0);
});
