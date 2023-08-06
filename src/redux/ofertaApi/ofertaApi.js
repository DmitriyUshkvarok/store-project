import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ofertaApi = createApi({
  reducerPath: 'ofertaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
  }),
  tagTypes: ['countries', 'categories'],
  endpoints: (builder) => ({
    getOferta: builder.query({
      query: () => '/countries',
      providesTags: ['countries'],
    }),
    getCountryCategory: builder.query({
      query: (id) => `/countries/${id}`,
      providesTags: ['countries'],
    }),
    getSubCategory: builder.query({
      query: (id) => `/categories/${id}`,
      providesTags: ['categories'],
    }),
  }),
});

export const {
  useGetOfertaQuery,
  useGetCountryCategoryQuery,
  useGetSubCategoryQuery,
} = ofertaApi;
