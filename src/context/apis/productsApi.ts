import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/',
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: (limit) => `products?limit=${limit}`,
		}),
	}),
});

export const { useGetProductsQuery } = productsApi;
