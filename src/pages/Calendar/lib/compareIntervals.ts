import { IInterval } from "../../../entities/table/model"

export const compareIntervals = (intervals1: IInterval[], intervals2: IInterval[]): boolean => {
if (intervals1.length !== intervals2.length) return false;

    for (let i = 0; i < intervals1.length; i++) {
        const customFirtInterval = {...intervals1[i], id: ''}
        const customSecondInterval = {...intervals2[i], id: ''}
        
   
        if (JSON.stringify(customFirtInterval) !== JSON.stringify(customSecondInterval)) {
            return false
        }
        
    }

    return true;
}