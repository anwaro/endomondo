import interpolate, {Extrapolate} from "./interpolate";

test('interpolate from range', () => {
    expect(interpolate(7.5, [0, 10], [0, 10])).toBe(7.5);
    expect(interpolate(9, [0, 10], [0, 20])).toBe(18);
});

test('interpolate from outside range, EXTEND', () => {
    expect(interpolate(-2, [0, 10], [0, 10])).toBe(-2);
    expect(interpolate(12, [0, 10], [0, 10])).toBe(12);
    expect(interpolate(-3, [0, 10], [0, 20])).toBe(-6);
    expect(interpolate(12, [0, 10], [0, 20])).toBe(24);
});

test('interpolate from outside range, CLAMP', () => {
    expect(interpolate(-2, [0, 10], [0, 10], Extrapolate.CLAMP)).toBe(0);
    expect(interpolate(12, [0, 10], [0, 10], Extrapolate.CLAMP)).toBe(10);
    expect(interpolate(-3, [0, 10], [0, 20], Extrapolate.CLAMP)).toBe(0);
    expect(interpolate(12, [0, 10], [0, 20], Extrapolate.CLAMP)).toBe(20);
});

test('interpolate flat sub range', () => {
    expect(interpolate(12, [10, 20, 30, 40], [10, 20, 20, 10])).toBe(12);
    expect(interpolate(22, [10, 20, 30, 40], [10, 20, 20, 10])).toBe(20);
    expect(interpolate(12, [10, 20, 30, 40], [20, 40, 40, 20])).toBe(24);
    expect(interpolate(22, [10, 20, 30, 40], [20, 40, 40, 20])).toBe(40);

    expect(interpolate(22, [10, 20], [40, 40])).toBe(40);
    expect(interpolate(2, [10, 20], [40, 40], Extrapolate.CLAMP)).toBe(40);
    expect(interpolate(15, [10, 20], [40, 40], Extrapolate.CLAMP)).toBe(40);
    expect(interpolate(25, [10, 20], [40, 40], Extrapolate.CLAMP)).toBe(40);
});

test('interpolate invalid input and output ranges', () => {
    const outputInputLengthsNotEqual = () => interpolate(12, [10, 20], [10, 20, 20]);
    const inputLengthTooSmall = () => interpolate(12, [10], [10, 20]);
    const outputLengthTooSmall = () => interpolate(12, [10, 12], [10]);

    expect(outputInputLengthsNotEqual).toThrowError(/must be the same length/);
    expect(inputLengthTooSmall).toThrowError(/inputRange must have at least 2 elements/);
    expect(outputLengthTooSmall).toThrowError(/outputRange must have at least 2 elements/);
});