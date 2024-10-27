import {IInterval} from "../model";

export const getInterval = (interval: IInterval | undefined): string => {
    const start = interval && interval?.start.length !== 0 ? interval?.start.split("T")[1].split(":") : undefined
    const end = interval && interval?.end.length !== 0 ? interval?.end.split("T")[1].split(":") : undefined

    if (start && end) {
        return `${start[0]}:${start[1]}-${end[0]}:${end[1]}`
    }
    return ' '
};