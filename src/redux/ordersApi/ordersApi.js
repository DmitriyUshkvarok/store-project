import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/src/apiConfig';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ['orders'],
  endpoints: (builder) => ({
    createOrders: builder.mutation({
      query: (ordersData) => ({
        url: '/orders ',
        method: 'POST',
        body: ordersData,
      }),
      invalidatesTags: ['orders'],
    }),
  }),
});

export const { useCreateOrdersMutation } = ordersApi;
