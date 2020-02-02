export const secondToTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const min = Math.floor((seconds - h * 3600) / 60);
    const sec = Math.floor(seconds % 60);
    return `${h ? `${h}:` : ''}${h ? padding(min) : min}:${padding(sec)}`;
};


export const padding = (num: number) => num > 9 ? `${num}` : `0${num}`;