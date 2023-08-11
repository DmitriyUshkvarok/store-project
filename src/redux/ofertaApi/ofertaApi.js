import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ofertaApi = createApi({
  reducerPath: 'ofertaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://paints.onrender.com',
  }),
  tagTypes: ['products', 'categories', 'subcategories'],
  endpoints: (builder) => ({
    getOferta: builder.query({
      query: () => '/products',
      providesTags: ['products'],
    }),
    getCountryCategory: builder.query({
      query: (id) => `/products?country=${id}`,
      providesTags: ['products'],
    }),
    getSubCategory: builder.query({
      query: (qwery) =>
        `/products?country=${qwery.countryId}&category=${qwery.categoryId}`,
      providesTags: ['products'],
    }),
    getColor: builder.query({
      query: (qwery) =>
        `/products?country=${qwery.countryId}&category=${qwery.categoryId}&subcategory=${qwery.subcategoryId}`,
      providesTags: ['products'],
    }),
    getInfoProduct: builder.query({
      query: (qwery) =>
        `/products?country=${qwery.countryId}&category=${qwery.categoryId}&subcategory=${qwery.subcategoryId}&color=${qwery.colorId}`,
      providesTags: ['products'],
    }),
    getAllProductsFiltered: builder.query({
      query: (qwery) =>
        `/products/all?country=${qwery.countryId}&category=${qwery.categoryId}&subcategory=${qwery.subcategoryId}&color=${qwery.colorId}&minPrice=${qwery.minPrice}&maxPrice=${qwery.maxPrice}&page=${qwery.page}`,
      providesTags: ['products'],
    }),
  }),
});

export const {
  useGetOfertaQuery,
  useGetCountryCategoryQuery,
  useGetSubCategoryQuery,
  useGetColorQuery,
  useGetInfoProductQuery,
  useGetAllProductsFilteredQuery,
} = ofertaApi;
