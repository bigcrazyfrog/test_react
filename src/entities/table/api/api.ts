import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseUrl} from "../../../shared/const/url";


export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['WorkTime'],
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        distributeDoctors: builder.query<any, void>({
            query: () => '/algorithms/v1'
        })
    })
});

export const { useDistributeDoctorsQuery, useLazyDistributeDoctorsQuery } = api