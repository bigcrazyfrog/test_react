import React from 'react';
import styles from './SelectDataInterval.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ISelectDataIntervalProps } from './model/types';
import { Dayjs } from 'dayjs';

const SelectDataInterval = (props: ISelectDataIntervalProps) => {
    return (
            <div className={styles.inputData}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                    label={props.label}
                    value={props.type === 'start' ? props.startDate : props.endDate}
                    onChange={(value: Dayjs | null) => {props.handleDateChange(value, props.type)}}
                    />
                </LocalizationProvider>
            </div>
    )
}

export { SelectDataInterval };



