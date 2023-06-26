import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeAPI = createApi({
  reducerPath: "youtubeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      // Agregar los encabezados personalizados aquí
      headers.set(
        "X-RapidAPI-Key",
        "b1d39b94ffmshff8c2a1a8d9ec98p1fd33ajsn9ef7453a6937"
      );
      headers.set("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSearchVideos: builder.query({
      query: ({ search }) =>
        `/search?q=${search}&order=viewCount&part=id%2Csnippet&maxResults=50`,
    }),
  }),
});

export const { useGetSearchVideosQuery } = youtubeAPI;
