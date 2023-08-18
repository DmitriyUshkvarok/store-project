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
    // getAllCountries: builder.query({
    //   query: () => `/countries`,
    //   providesTags: ['countries'],
    // }),
    getAllCategory: builder.query({
      query: () => `/categories`,
      providesTags: ['categories'],
    }),
    // getAllSubcategory: builder.query({
    //   query: () => `/subcategories`,
    //   providesTags: ['subcategories'],
    // }),
    // getAllColor: builder.query({
    //   query: () => `/colors`,
    //   providesTags: ['colors'],
    // }),
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
    // addCountries: builder.mutation({
    //   query: (formData) => ({
    //     url: `/countries `,
    //     method: 'POST',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['countries'],
    // }),
    addCategoties: builder.mutation({
      query: (formData) => ({
        url: `/categories `,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: ['categories'],
    }),
    // addSubCategoties: builder.mutation({
    //   query: (formData) => ({
    //     url: `/subcategories `,
    //     method: 'POST',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['subcategories'],
    // }),
    // addColoros: builder.mutation({
    //   query: (formData) => ({
    //     url: `/colors `,
    //     method: 'POST',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['colors'],
    // }),
    addProduct: builder.mutation({
      query: (formData) => ({
        url: `/products `,
        method: 'POST',
        body: formData,
      }),

      invalidatesTags: ['products'],
    }),
    // updateCountries: builder.mutation({
    //   query: ({ formData, countryId }) => ({
    //     url: `/countries/${countryId}`,
    //     method: 'PUT',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['countries'],
    // }),
    updateCategories: builder.mutation({
      query: ({ formData, categoryId }) => ({
        url: `/categories/${categoryId}`,
        method: 'PUT',
        body: formData,
      }),

      invalidatesTags: ['categories'],
    }),
    // updateSubCategories: builder.mutation({
    //   query: ({ formData, subcategoryId }) => ({
    //     url: `/subcategories/${subcategoryId}`,
    //     method: 'PUT',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['subcategories'],
    // }),
    // updateColors: builder.mutation({
    //   query: ({ formData, colorId }) => ({
    //     url: `/colors/${colorId}`,
    //     method: 'PUT',
    //     body: formData,
    //   }),

    //   invalidatesTags: ['colors'],
    // }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
    // deleteCountry: builder.mutation({
    //   query: (id) => ({
    //     url: `/countries/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['countries'],
    // }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['categories'],
    }),
    // deleteSubCategory: builder.mutation({
    //   query: (id) => ({
    //     url: `/subcategories/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['subcategories'],
    // }),
    // deleteColor: builder.mutation({
    //   query: (id) => ({
    //     url: `/colors/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['colors'],
    // }),
  }),
});

export const {
  useGetOfertaQuery,
  useGetCategoryProductsQuery,
  useUpdateProductStatusMutation,
  // useGetSubCategoryQuery,
  // useGetColorQuery,
  useGetInfoProductQuery,
  useGetAllProductsFilteredQuery,
  useGetAllInfoProductQuery,
  // useGetAllCountriesQuery,
  useGetAllCategoryQuery,
  // useGetAllSubcategoryQuery,
  // useGetAllColorQuery,
  useUpdateProductMutation,
  // useAddCountriesMutation,
  useAddCategotiesMutation,
  // useAddSubCategotiesMutation,
  // useAddColorosMutation,
  useAddProductMutation,
  // useUpdateCountriesMutation,
  useUpdateCategoriesMutation,
  // useUpdateSubCategoriesMutation,
  // useUpdateColorsMutation,
  useDeleteProductMutation,
  // useDeleteCountryMutation,
  useDeleteCategoryMutation,
  // useDeleteSubCategoryMutation,
  // useDeleteColorMutation,
} = ofertaApi;
