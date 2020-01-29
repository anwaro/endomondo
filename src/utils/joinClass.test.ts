import {joinClass} from "./joinClass";

test('join class names', () => {
    expect(joinClass('')).toBe('');
    expect(joinClass('className1', 'className2', 'className3')).toBe('className1 className2 className3');
    expect(joinClass('className1', ' ', '')).toBe('className1');
});
