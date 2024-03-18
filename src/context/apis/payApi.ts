import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const payApi = createApi({
  reducerPath: 'payApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://payment-gateway.free.beeceptor.com/',
  }),
  endpoints: (builder) => ({
    postPayment: builder.mutation({
      query: (args) => ({
        url: 'payment',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const { usePostPaymentMutation } = payApi;
