import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertiesApi = createApi({
  reducerPath: 'propertiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
  }),
  tagTypes: ['countries', 'categories', 'subcategories', 'colors'],
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/countries',
      providesTags: ['countries'],
    }),
    getCategories: builder.query({
      query: () => '/categories',
      providesTags: ['categories'],
    }),
    getSubcategories: builder.query({
      query: () => '/subcategories',
      providesTags: ['subcategories'],
    }),
    getColors: builder.query({
      query: () => '/colors',
      providesTags: ['colors'],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
  useGetColorsQuery,
} = propertiesApi;
