import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ofertaAllApi = createApi({
  reducerPath: 'ofertaAllApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
  }),
  tagTypes: ['products', 'categories'],
  endpoints: (builder) => ({
    getAllProductsFilteredNoToket: builder.query({
      query: (qwery) =>
        `/products/all?country=${qwery.country}&category=${qwery.categoryId}&color=${qwery.color}&minPrice=${qwery.minPrice}&maxPrice=${qwery.maxPrice}&page=${qwery.page}`,
      providesTags: ['products'],
    }),
  }),
});

export const { useGetAllProductsFilteredNoToketQuery } = ofertaAllApi;
