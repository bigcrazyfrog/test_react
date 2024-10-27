import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { api } from "../../entities/table/api/api";
import cabinetsSlice from "../../entities/table/lib/cabinetsSlice";
import intervalSlice from "../../entities/table/lib/intervalSlice";
import doctorsSlice from "../../entities/table/lib/doctorsSlice";
import schedulesSlice from "../../entities/table/lib/schedulesSlice";
import userSlice from "../../entities/table/lib/userSlice";

const reducers = combineReducers({
    [api.reducerPath]: api.reducer,
    cabinets: cabinetsSlice,
    intervals: intervalSlice,
    doctors: doctorsSlice,
    schedules: schedulesSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
}) 

