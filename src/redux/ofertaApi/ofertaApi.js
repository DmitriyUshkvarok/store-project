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
  tagTypes: ['products', 'categories'],
  endpoints: (builder) => ({
    getOferta: builder.query({
      query: () => '/products',
      providesTags: ['products'],
    }),
    getCategoryProducts: builder.query({
      query: (select) =>
        `/products?category=${select.categoryId}&country=${select?.country}&color=${select?.color}`,
      providesTags: ['products'],
    }),

    // getSubCategory: builder.query({
    //   query: (qwery) =>
    //     `/products?country=${qwery.countryId}&category=${qwery.categoryId}`,
    //   providesTags: ['products'],
    // }),
    // getColor: builder.query({
    //   query: (qwery) =>
    //     `/products?country=${qwery.countryId}&category=${qwery.categoryId}&subcategory=${qwery.subcategoryId}`,
    //   providesTags: ['products'],
    // }),
    getInfoProduct: builder.query({
      query: (qwery) => `/products/${qwery.productId}`,
      providesTags: ['products'],
    }),
    getAllProductsFiltered: builder.query({
      query: (qwery) =>
        `/products/all?country=${qwery.country}&category=${qwery.categoryId}&color=${qwery.color}&minPrice=${qwery.minPrice}&maxPrice=${qwery.maxPrice}&page=${qwery.page}`,
      providesTags: ['products'],
    }),
    getAllInfoProduct: builder.query({
      query: ({ page, limit, name }) =>
        `/products/all?page=${page}&limit=${limit}&name=${name}`,
      providesTags: ['products'],
    }),
    getAllCategory: builder.query({
      query: () => `/categories`,
      providesTags: ['categories'],
    }),
    updateProduct: builder.mutation({
      query: ({ productId, formData }) => ({
        url: `/products/${productId} `,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['products'],
    }),
    updateProductStatus: builder.mutation({
      query: ({ productId, newInStock }) => ({
        url: `/products/${productId} `,
        method: 'PATCH',
        body: newInStock,
      }),
      invalidatesTags: ['products'],
    }),
    addCategoties: builder.mutation({
      query: (formData) => ({
        url: `/categories `,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: ['categories'],
    }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: `/products `,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: ['products'],
    }),
    updateCategories: builder.mutation({
      query: ({ formData, categoryId }) => ({
        url: `/categories/${categoryId}`,
        method: 'PUT',
        body: formData,
      }),

      invalidatesTags: ['categories'],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categories', 'products'],
    }),
  }),
});

export const {
  useGetOfertaQuery,
  useGetCategoryProductsQuery,
  useUpdateProductStatusMutation,
  useGetInfoProductQuery,
  useGetAllProductsFilteredQuery,
  useGetAllInfoProductQuery,
  useGetAllCategoryQuery,
  useUpdateProductMutation,
  useAddCategotiesMutation,
  useAddProductMutation,
  useUpdateCategoriesMutation,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
} = ofertaApi;
