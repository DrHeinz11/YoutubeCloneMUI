export interface ChannelDetailsVideoRaw {
  items: Item[]
  kind: string
  nextPageToken: string
  pageInfo: PageInfo
  regionCode: string
}

export interface Item {
  id: ID
  kind: ItemKind
  snippet: Snippet[]
}

export interface ID {
  kind: IDKind
  videoId: string
}

export enum IDKind {
  YoutubeVideo = 'youtube#video'
}

export enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult'
}

export interface Snippet {
  channelId: ChannelID
  channelTitle: ChannelTitle
  description: string
  liveBroadcastContent: LiveBroadcastContent
  publishTime: Date
  publishedAt: Date
  thumbnails: Thumbnails
  title: string
}

export enum ChannelID {
  UCIhPBu7GVRi1Tnre0ZfXadg = 'UCIhPBu7gVRi1tnre0ZfXadg'
}

export enum ChannelTitle {
  SecretNumber = 'SECRET NUMBER'
}

export enum LiveBroadcastContent {
  None = 'none'
}

export interface Thumbnails {
  default: Default
  high: Default
  medium: Default
}

export interface Default {
  height: number
  url: string
  width: number
}

export interface PageInfo {
  resultsPerPage: number
  totalResults: number
}
