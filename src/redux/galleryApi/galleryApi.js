import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
  }),
  tagTypes: ['gallery'],
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => '/gallery',
      providesTags: ['gallery'],
    }),
    // getCountryCategory: builder.query({
    //   query: (id) => `/countries/${id}`,
    //   providesTags: ['countries'],
    // }),
    // getSubCategory: builder.query({
    //   query: (id) => `/categories/${id}`,
    //   providesTags: ['categories'],
    // }),
  }),
});

export const { useGetGalleryQuery } = galleryApi;
