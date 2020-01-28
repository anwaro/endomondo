export const joinClass = (className: string, ...classesName: string[]) => {
    return [className, ...classesName].join(' ');
};
