import * as React from 'react';
import { useState, ChangeEvent, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './EditIntervalForm.module.scss';
import { ICabinet, IInterval } from "../../model";
import { useAppSelector, useAppDispatch } from "../../../../shared/lib/store/redux";
import { closeForm, addIntervals, updateInterval, deleteInterval } from "../../lib/intervalSlice";
import Autocomplete from '@mui/material/Autocomplete';
import { getInterval } from "../../lib/getInterval";
import dayjs from 'dayjs';


export const EditIntervalForm = () => {
    const dispatch = useAppDispatch();

    const [startInterval, setStartInterval] = useState<string>('');
    const [endInterval, setEndInterval] = useState<string>('');
    const [workCabinet, setWorkCabinet] = useState<ICabinet | null>(null);

    const intervals = useAppSelector<IInterval[]>((state) => state.intervals.intervals)
    const intervalId = useAppSelector<string>((state) => state.intervals.intervalId);
    const status = useAppSelector((state) => state.intervals.status);
    
    const cabinets = useAppSelector<ICabinet[]>((state) => state.cabinets.items);
    const isOpen = useAppSelector<boolean>((state) => state.intervals.isOpenFormEdit);

   
    const interval: IInterval | undefined = intervals.find((interval) => interval?.id === intervalId);
    const formatInterval: string = getInterval(interval)

    const copyInterval = () => {
        if (interval) {
            const newInterval = { ...interval }

            newInterval.start = startInterval;
            newInterval.end = endInterval;

            if (workCabinet) {
                newInterval.cabinet = workCabinet;
            }

            return newInterval;
        }
    }

    const handleUpdateInterval = () => {
        if (interval) {
            const newInterval = copyInterval();
            dispatch(updateInterval({ newInterval: newInterval, cabinet: workCabinet }));
        }
        
        dispatch(closeForm())
    }

    const handleDeleteInterval = () => {  
        if (interval) {
            const newInterval = copyInterval();
            dispatch(deleteInterval(newInterval));
        }
        
        dispatch(closeForm())
    }

    const handleCreateInterval = () => {     
        if (interval) {
            const newInterval = copyInterval();
            dispatch(addIntervals({ newInterval: newInterval, cabinet: workCabinet }));
        }
        
        dispatch(closeForm())
    }


    const checkingInterval = (): boolean => {
        return interval?.start.split('T')[1] !== '00:00:00';
    }

    useEffect(() => {
        setWorkCabinet(interval?.cabinet ?? null)
        setStartInterval(interval?.start ?? '');
        setEndInterval(interval?.end ?? '');
    }, [interval])


    const handleIntervalChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const inputInterval = event.target.value.split('-');
        const originalDate = interval?.start.split('T')[0];

        const inputStartTime = inputInterval[0] ? inputInterval[0].split(':') : [];
        const newStartTime = `${originalDate}T${inputStartTime[0] || '00'}:${inputStartTime[1] || '00'}:${inputStartTime[2] || '00'}`

        const inputEndTime = inputInterval[1] ? inputInterval[1].split(':') : [];
        const newEndTime = `${originalDate}T${inputEndTime[0] || '00'}:${inputEndTime[1] || '00'}:${inputEndTime[2] || '00'}`

        setStartInterval(newStartTime);
        setEndInterval(newEndTime);
    };

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 300,
        padding: '30px 15px 0 15px',
    };

    const DrawerList = (
        <Box sx={style} role="presentation">
            {interval ? <h2 className={styles.title}>{interval?.doctor?.first_name} {interval?.doctor?.last_name} {interval?.doctor?.father_name}</h2> : ''}
            {interval ? <h2 className={styles.date}>{dayjs(interval?.start).format('D MMMM')}</h2> : ''}
            <TextField
                className={styles.editInput}
                placeholder="15:00-17:00"
                defaultValue={formatInterval}
                label="Интервал работы"
                variant="outlined"
                onChange={handleIntervalChange}
            />

            <Autocomplete
                disablePortal
                className={styles.editInput}
                value={workCabinet}
                onChange={(event: any, value: ICabinet | null) => {
                    setWorkCabinet(value)
                }}
                options={cabinets}
                getOptionLabel={(option) => option.number}
                renderInput={(params) => <TextField key={params.id} {...params} label="Выбирите кабинет" />}
            />

            {checkingInterval() ?
                <div className={styles.buttonContainer}>
                    <Button className={styles.button} variant="contained" onClick={handleUpdateInterval}>Сохранить</Button>
                    <Button className={styles.button} variant="contained" color="error" onClick={handleDeleteInterval}>Удалить</Button>
                </div> :

                <Button className={styles.button} variant="contained" onClick={handleCreateInterval}>Добавить</Button>}

        </Box>
    );

    return (
        <div>
            <Drawer anchor={'right'} open={isOpen} onClose={() => { dispatch(closeForm()) }}>
                {DrawerList}
            </Drawer>
        </div>
    );

    return <></>
}