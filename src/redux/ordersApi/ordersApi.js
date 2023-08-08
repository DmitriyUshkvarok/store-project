import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
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
