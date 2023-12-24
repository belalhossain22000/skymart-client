import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-2-pi.vercel.app/api",
  }),
  tagTypes: ['products,carts,users'],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
 
});


