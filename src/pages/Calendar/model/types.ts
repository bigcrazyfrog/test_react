import {IInterval} from "../../../entities/table/model";

export interface ITransformSchedule {
    id: string;
    Name: string;
    [date: string]: any | IInterval;
}

export interface ITransformDataProps {
    transformSchedule: ITransformSchedule[],
    completionSchedule: IInterval[]
}


const arr = [
    {
        "a":  {
            id: 1,
            Name: 'Зубенко М.П',
            "2024-06-06": "params",
            "2024-06-08": "params1",
            "2024-06-09": "params3",
            "2024-06-10": "params4",
            "2024-06-11": "params5",
            "2024-06-12": "params6",
            "2024-06-13": "params7"
        },
    },
    {
        id: 2,
        Name: 'Scott M.C',
        "2024-06-06": "params",
        "2024-06-08": "params1",
        "2024-06-09": "params3",
        "2024-06-10": "params4",
        "2024-06-11": "params5",
        "2024-06-12": "params6",
        "2024-06-13": "params7"
    }
]
