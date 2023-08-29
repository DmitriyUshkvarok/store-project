import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearToken } from './authSlice';
import { baseUrl } from '@/src/apiConfig';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/admin/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/admin/logout ',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),
    checkToken: builder.query({
      query: () => '/admin/check',

      onQueryStarted: (_, { dispatch, getState, queryFulfilled }) => {
        const token = getState().auth.token;
        if (!token) {
          dispatch(clearToken());
          queryFulfilled(undefined);
        }
      },
      providesTags: ['auth'],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useCheckTokenQuery } =
  authApi;
