export const joinClass = (className: string, ...classesName: string[]) => {
    return [className, ...classesName].filter(e => e.replace(/ /, '').length).join(' ');
};
