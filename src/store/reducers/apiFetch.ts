import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey: string = import.meta.env.VITE_API_KEY;
const apiHost: string = import.meta.env.VITE_API_HOST;

export const youtubeAPI = createApi({
  reducerPath: "youtubeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com",
    prepareHeaders: (headers) => {
      // Agregar los encabezados personalizados aquí
      headers.set("X-RapidAPI-Key", apiKey);
      headers.set("X-RapidAPI-Host", apiHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchVideos: builder.query({
      query: ({ search }) =>
        `search?q=${search}&part=id%2Csnippet&maxResults=50`,
    }),
    getDetailVideos: builder.query({
      query: ({ videoId }) =>
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
    }),
    getDetailChannel: builder.query({
      query: ({ channelId }) =>
        `channels?part=snippet%2Cstatistics&id=${channelId}`,
    }),
  }),
});

export const {
  useGetSearchVideosQuery,
  useGetDetailVideosQuery,
  useGetDetailChannelQuery,
} = youtubeAPI;
