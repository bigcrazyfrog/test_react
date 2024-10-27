import { Dayjs } from "dayjs";

export interface ISelectDataIntervalProps {
    type: 'start' | 'end';
    label: string;
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    handleDateChange: (newValue: Dayjs | null, type: 'start' | 'end') => void;
}