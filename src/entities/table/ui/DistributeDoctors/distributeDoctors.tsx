import React, { useEffect, useState } from 'react';
import styles from './distributeDoctors.module.scss';
import Button from '@mui/material/Button';
import { getIntervals } from '../../lib/intervalSlice';
import { useAppDispatch } from '../../../../shared/lib/store/redux';
import axios from 'axios';
import { baseUrl } from '../../../../shared/const/url';


const DistributeDoctors = () => {
    const dispatch = useAppDispatch();

    const handleDistribute = () => {
        axios.get(`${baseUrl}/algorithms/v1`).then(res => {
            dispatch(getIntervals());
        })
    }
    
    return (
        <Button onClick={handleDistribute} className={styles.Button}>Распределить врачей </Button>
    );
}

export { DistributeDoctors }