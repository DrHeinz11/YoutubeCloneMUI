import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rawObjectResponse } from '../../pages/Channel/components/responseRaw'
import { ChannelVideoRaw } from '../../types/ChannelVideoRaw'
import { RelatedToVideoResponse } from '../../types/relatedToVideoIdType'
import { config, ENV } from '../../../env.config';

const apiKey: string = config.apiKey;
const apiHost: string = config.apiHost;
const baseUrl: string = config.baseUrl;

console.log({apiHost,apiKey,baseUrl})
const isProduction = (search: string) => {
  return ENV === 'PRODUCTION' 
    ? `search?q=${search}&part=id%2Csnippet&maxResults=50` 
    : `search?query=${search}`;
}
const MAX_RESULT = '25'
export const YoutubeAPI = createApi({
  reducerPath: 'YoutubeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      // Agregar los encabezados personalizados aquí
      headers.set('X-RapidAPI-Key', apiKey)
      headers.set('X-RapidAPI-Host', apiHost)
      return headers
    }
  }),
  endpoints: (builder) => ({
    getSearchVideos: builder.query({
      query: ({ search }) => isProduction(search)
    }),
    getDetailVideos: builder.query({
      query: ({ videoId }) => `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    }),
    getDetailChannel: builder.query<rawObjectResponse, { channelId: string }>({
      query: ({ channelId }) => `channels?part=snippet%2Cstatistics&id=${channelId}`,
      keepUnusedDataFor: 600000
    }),
    getDetailChannelVideos: builder.query<
      ChannelVideoRaw,
      { channelId: string; part: string; order: string; token?: string }
    >({
      query: ({ channelId, part = 'snippet,id', order = 'date', token }) =>
        `search?part=${part}&channelId=${channelId}${
          token ? '&pageToken=' + token : ''
        }&order=${order}&maxResults=${MAX_RESULT}`
    }),
    getRelatedToVideoId: builder.query<
      RelatedToVideoResponse,
      { relatedToVideoId: string; part: string; order: string; token?: string }
    >({
      query: ({ relatedToVideoId, part = 'snippet,id', order = 'date', token }) =>
        `search?part=${part}&relatedToVideoId=${relatedToVideoId}${
          token ? '&pageToken=' + token : ''
        }&order=${order}&maxResults=${MAX_RESULT}`
    })
  })
})

export const {
  useGetSearchVideosQuery,
  useGetDetailVideosQuery,
  useGetDetailChannelQuery,
  useGetDetailChannelVideosQuery,
  useGetRelatedToVideoIdQuery
} = YoutubeAPI
