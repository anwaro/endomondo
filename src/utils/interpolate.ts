export const Extrapolate = {
    EXTEND: 'extend',
    CLAMP: 'clamp',
};

const interpolate = (value: number, inputRange: number[], outputRange: number[], extrapolate = Extrapolate.EXTEND) => {
    if (inputRange.length < 2) {
        throw Error('inputRange must have at least 2 elements.');
    }
    if (outputRange.length < 2) {
        throw Error('outputRange must have at least 2 elements.');
    }
    if (inputRange.length !== outputRange.length) {
        throw Error('inputRange and outputRange must be the same length');
    }
    let output = interpolateInternal(value, inputRange, outputRange);

    if (extrapolate === Extrapolate.CLAMP) {
        if (value < inputRange[0]) {
            return outputRange[0];
        }
        if (value > inputRange[inputRange.length - 1]) {
            return outputRange[inputRange.length - 1];
        }
    }

    return output;
};

export const interpolateInternal = (value: number, inputRange: number[], outputRange: number[], offset = 0): number => {
    if (inputRange.length - offset === 2) {
        return interpolateInternalSingle(value, inputRange, outputRange, offset);
    }
    return value < inputRange[offset + 1]
        ? interpolateInternalSingle(value, inputRange, outputRange, offset)
        : interpolateInternal(value, inputRange, outputRange, offset + 1);
};

export const interpolateInternalSingle = (value: number, inputRange: number[], outputRange: number[], offset: number) => {

    const inS = inputRange[offset];
    const inE = inputRange[offset + 1];
    const outS = outputRange[offset];
    const outE = outputRange[offset + 1];
    return interpolateInternalSingleProc(value, inS, inE, outS, outE);
};

export const interpolateInternalSingleProc = (value: number, inS: number, inE: number, outS: number, outE: number) => {
    const progress = (value - inS) / (inE - inS);
    const resultForNonZeroRange = outS + progress * (outE - outS);
    return inS === inE ? value <= inS ? outS : outE : resultForNonZeroRange;
};

export default interpolate;