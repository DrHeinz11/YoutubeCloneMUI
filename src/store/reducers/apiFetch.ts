import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiKey = import.meta.env.VITE_API_KEY;
const apiHost = import.meta.env.VITE_API_HOST;
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
        `/search?q=${search}&part=id%2Csnippet&maxResults=50`,
    }),
  }),
});

export const { useGetSearchVideosQuery } = youtubeAPI;
