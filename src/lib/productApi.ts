import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  discount: string;
  inStock: boolean;
  features: string[];
};
export const productApi=createApi({
  reducerPath:'productApi',
  baseQuery:fetchBaseQuery({baseUrl:'/api'}),
  endpoints:(builder)=>({
    getProductById:builder.query<Product,string>({
      query:(id)=>`/products/${id}`,
    }),
  }),
});
export const {useGetProductByIdQuery}=productApi;