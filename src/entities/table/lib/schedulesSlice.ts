import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {baseUrl} from "../../../shared/const/url";
import { ISchdule } from '../model';

export const getSchedules = createAsyncThunk<ISchdule[]>('doctors/getSchedule', async () => {
    const response = await axios.get(`${baseUrl}/schedules/`, {
      headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return response.data
});

export const addSchedule = createAsyncThunk<ISchdule, string>('doctors/addSchedule', async (ScheduleName) => {
    const response = await axios.post(`${baseUrl}/schedules/`, {
      name: ScheduleName,
      description: ScheduleName
    }, {
      headers: {
        'Content-Type': 'Accept: application/json',
         'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return response.data;
});

const schedulesSlice = createSlice({
  name: 'schedules',
  initialState: {
    items: [] as ISchdule[],
    status: 'idle',
    error: null as string | null,
    currentSchedule: {} as ISchdule
  },
  reducers: {
    setSchedule: (state, action) => {
      state.currentSchedule = action.payload;
    }
  },
  extraReducers: builder => {
    builder
        .addCase(getSchedules.pending, state => {
          state.status = 'loading';
        })
        .addCase(getSchedules.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(getSchedules.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch schedule';
        })

        .addCase(addSchedule.pending, state => {
            state.status = 'loading';
        })
        .addCase(addSchedule.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items.push(action.payload);
        })
        .addCase(addSchedule.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch schedule';
        });
  },
});

export const { setSchedule } = schedulesSlice.actions;
export default schedulesSlice.reducer;

