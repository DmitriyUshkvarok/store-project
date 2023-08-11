import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ofertaApi = createApi({
  reducerPath: 'ofertaApi',
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
  tagTypes: ['products', 'countries', 'categories', 'subcategories', 'colors'],
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
    getAllInfoProduct: builder.query({
      query: () => `/products/all`,
      providesTags: ['products'],
    }),
    getAllCountries: builder.query({
      query: () => `/countries`,
      providesTags: ['countries'],
    }),
    getAllCategory: builder.query({
      query: () => `/categories`,
      providesTags: ['categories'],
    }),
    getAllSubcategory: builder.query({
      query: () => `/subcategories`,
      providesTags: ['subcategories'],
    }),
    getAllColor: builder.query({
      query: () => `/colors`,
      providesTags: ['colors'],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `/products/${productId} `,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetOfertaQuery,
  useGetCountryCategoryQuery,
  useGetSubCategoryQuery,
  useGetColorQuery,
  useGetInfoProductQuery,
  useGetAllInfoProductQuery,
  useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  useGetAllSubcategoryQuery,
  useGetAllColorQuery,
  useUpdateProductMutation,
} = ofertaApi;
