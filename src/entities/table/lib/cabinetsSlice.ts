// redux/cabinetsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ICabinet } from "../model";
import axios from "axios";
import { baseUrl } from "../../../shared/const/url";

export const getCabinets = createAsyncThunk<ICabinet[]>(
  "cabinets/getCabinets",
  async () => {
    const response = await axios.get(`${baseUrl}/cabinets`);

    return response?.data;
  }
);

const cabinetsSlice = createSlice({
  name: "cabinets",
  initialState: {
    items: [] as ICabinet[],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCabinets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCabinets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getCabinets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cabinets";
      });
  },
});

export default cabinetsSlice.reducer;
