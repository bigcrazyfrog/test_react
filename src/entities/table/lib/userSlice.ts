import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICabinet } from '../model';
import axios from 'axios';
import {baseUrl} from "../../../shared/const/url";

export const login = createAsyncThunk<any, any>('auth/login', async ({email, password}) => {
    const response = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
});

export const register = createAsyncThunk<any, any>('auth/register', async ({username, email, password}) => {
    const response = await axios.post(`${baseUrl}/auth/register`, {
        username,
        email,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
});


const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false as boolean,
    status: 'idle',
    statusReg: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
        .addCase(login.pending, state => {
          state.status = 'loading';
        })
        .addCase(login.fulfilled, (state, action) => {
          state.status = 'succeeded';
          console.log(action.payload)
          state.isAuth = true;
          localStorage.setItem("token", action.payload.access_token);
        })
        .addCase(login.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch user';
        })

        .addCase(register.pending, state => {
            state.statusReg = 'loading';
          })
        .addCase(register.fulfilled, (state, action) => {
            state.statusReg = 'succeeded';
            
        })
        .addCase(register.rejected, (state, action) => {
            state.statusReg = 'failed';
            state.error = action.error.message || 'Failed to fetch user';
        });
  },
});

export default userSlice.reducer;

