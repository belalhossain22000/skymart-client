import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ['products,carts,users'],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
 
});


