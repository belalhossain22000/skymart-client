
import { baseApi } from './baseApi';


export const userApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: `/products`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags:["products"]
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: 'GET',
      }),
      providesTags:["products"]
    }),
    getProductById: builder.query({
        query: (id) => ({
          url: `/products/${id}`, 
          method: 'GET',
        }),
      }),
  
  }),
});

export const {
  useAddProductMutation,
  useGetProductByIdQuery,
  useGetAllProductsQuery
} = userApiSlice;
