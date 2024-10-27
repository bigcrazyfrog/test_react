import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IInterval } from "../model";
import axios from "axios";
import { baseUrl } from "../../../shared/const/url";
import { ITransformSchedule } from '../../../pages/Calendar/model/types';

interface InitialState {
    intervals: IInterval[];
    transformSchedule: ITransformSchedule[];
    intervalId: string;
    isOpenFormEdit: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: InitialState = {
    intervals: [],
    transformSchedule: [],
    intervalId: '',
    isOpenFormEdit: false,
    status: 'idle',
    error: null,
};

const updateIntervalList = (state: InitialState, newInterval: IInterval) => {
    const isExist = state.intervals.some(interval => interval.id === newInterval.id);
    if (isExist) {
        state.intervals = state.intervals.map(interval => interval.id === newInterval.id ? newInterval : interval);
    } else {
        state.intervals = [...state.intervals, newInterval];
    }
};

export const getIntervals = createAsyncThunk<IInterval[]>('intervals/getInterval', async () => {
    const response = await axios.get(`${baseUrl}/intervals/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    return response.data
})

export const addIntervals = createAsyncThunk<IInterval, any>('intervals/addInterval', async ({ newInterval, cabinet }) => {
    const response = await axios.post(`${baseUrl}/intervals/`, {
        start: newInterval.start,
        end: newInterval.end,
        doctor_id: newInterval.doctor.id,
        schedule_id: newInterval.schedule.id,
        cabinet_id: cabinet?.id,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    return response.data;
});

export const updateInterval = createAsyncThunk<any, any>('intervals/updateInterval', async ({ newInterval, cabinet }) => {
    const response = await axios.put(`${baseUrl}/intervals/${newInterval.id}`, {
        start: newInterval.start,
        end: newInterval.end,
        doctor_id: newInterval.doctor.id,
        schedule_id: newInterval.schedule.id,
        cabinet_id: cabinet?.id,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    return response.data;
})

export const deleteInterval = createAsyncThunk<any, any>('intervals/deleteInterval', async (newInterval) => {
    await axios.delete(`${baseUrl}/intervals/${newInterval.id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })

    return newInterval.id;
})

const intervalSlice = createSlice({
    name: 'intervals',
    initialState: initialState,
    reducers: {
        setIntervalId: (state, action) => {
            state.intervalId = action.payload;
        },
        updateIntervals: (state, action) => {
            state.intervals = [...action.payload]
        },
        openForm: (state) => {
            state.isOpenFormEdit = true;
        },
        closeForm: (state) => {
            state.isOpenFormEdit = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getIntervals.pending, state => {
                state.status = 'loading';
            })
            .addCase(getIntervals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.intervals = action.payload;
            })
            .addCase(getIntervals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch intervals';
            })

            .addCase(addIntervals.pending, state => {
                state.status = 'loading';
            })
            .addCase(addIntervals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                updateIntervalList(state, action.payload);
            })
            .addCase(addIntervals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch intervals';
            })

            .addCase(deleteInterval.pending, state => {
                state.status = 'loading';
            })
            .addCase(deleteInterval.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const filterArray = state.intervals.filter(interval => interval.id !== action.payload);
                state.intervals = [...filterArray];

            })
            .addCase(deleteInterval.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch intervals';
            })

            .addCase(updateInterval.pending, state => {
                state.status = 'loading';
            })
            .addCase(updateInterval.fulfilled, (state, action) => {
                state.status = 'succeeded';
                updateIntervalList(state, action.payload);
            })
            .addCase(updateInterval.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch intervals';
            })
    }

});

export const { openForm, closeForm, setIntervalId, updateIntervals } = intervalSlice.actions;
export default intervalSlice.reducer;
