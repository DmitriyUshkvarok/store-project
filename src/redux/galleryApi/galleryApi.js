import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

let protocol = '';
let host = '';

if (typeof window !== 'undefined') {
  protocol = window.location.protocol;
  host = window.location.hostname;
}

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://paints.onrender.com',
    baseUrl: `${protocol}:3001/api`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
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
      invalidatesTags: ['gallery'],
    }),
    deleteGalleryItem: builder.mutation({
      query: (_id) => ({
        url: `/gallery/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['gallery'],
    }),
  }),
});

export const {
  useAddGalleryItemMutation,
  useDeleteGalleryItemMutation,
  useGetGalleryQuery,
} = galleryApi;
