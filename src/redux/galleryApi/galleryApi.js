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

    addGalleryItem: builder.mutation({
      query: (newItem) => ({
        url: '/gallery',
        method: 'POST',
        body: newItem,
      }),
      invalidatesTags: [{ type: 'gallery', id: 'LIST' }],
    }),
    deleteGalleryItem: builder.mutation({
      query: (_id) => ({
        url: `/gallery/${_id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetGalleryQuery,
  useAddGalleryItemMutation,
  useDeleteGalleryItemMutation,
} = galleryApi;
