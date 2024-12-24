import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactApi = createApi({
  reducerPath: 'contactApi', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://christina-pali.vercel.app/api/v1', 
  }),
  endpoints: (builder) => ({
    submitContactForm: builder.mutation({
      query: (formData) => ({
        url: '/contact',
        method: 'POST',
        body: formData, 
      }),
    }),
  }),
});

// Export the mutation hook
export const { useSubmitContactFormMutation } = contactApi;
