import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminOrdersApi = createApi({
  reducerPath: 'adminOrdersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['adminOrders'],
  endpoints: (builder) => ({
    getOrdersByAdmin: builder.query({
      query: () => '/orders',
      providesTags: ['adminOrders'],
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['adminOrders'],
    }),
  }),
});

export const { useGetOrdersByAdminQuery, useDeleteOrderMutation } =
  adminOrdersApi;
