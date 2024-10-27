import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IDoctor } from '../model';
import axios from 'axios';
import {baseUrl} from "../../../shared/const/url";

export const getDoctors = createAsyncThunk<IDoctor[]>('doctors/getDoctors', async () => {
    const response = await axios.get(`${baseUrl}/doctors/`, {
      headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    return response.data
});

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    items: [] as IDoctor[],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
        .addCase(getDoctors.pending, state => {
          state.status = 'loading';
        })
        .addCase(getDoctors.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(getDoctors.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch doctros';
        });
  },
});

export default doctorsSlice.reducer;

