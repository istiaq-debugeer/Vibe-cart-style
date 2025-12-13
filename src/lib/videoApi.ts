import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Video } from "./videoSlice"; // import your Video type

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getVideoById: builder.query<Video, string>({
      query: (id) => `/videos/${id}`,
    }),
  }),
});

export const { useGetVideoByIdQuery } = videoApi;
