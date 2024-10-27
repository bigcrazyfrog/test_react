export interface ICabinet {
    id: string;
    number: string;
    description: string;
}

export interface IDoctor {
    id: string;
    first_name: string;
    last_name: string;
    father_name: string;
    priority_cabinet: string;
    cabinets: ICabinet[];
}

export interface IInterval {
    start: string;
    end: string;
    cabinet?: ICabinet;
    doctor: IDoctor;
    schedule: ISchdule;
    id?: string;
}

export interface ICell {
    interval: string,
    cabinet: number
}

export interface ISchdule {
    id: string,
    name: string,
    description: string
}