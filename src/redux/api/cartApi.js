
import { baseApi } from './baseApi';


export const cartApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: `/carts/add`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags:["carts"]
    }),
   
    getSingleCart: builder.query({
        query: (id) => ({
          url: `carts/${id}`, 
          method: 'GET',
        }),
        providesTags:['carts']
      }),
    }),
   
});

export const {
  useAddToCartMutation,
  useGetSingleCartQuery
} = cartApiSlice;
