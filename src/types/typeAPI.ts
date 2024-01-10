export interface DataRootObject {
  items: Item[]
  kind: string
  nextPageToken: string
  pageInfo: PageInfo
  regionCode: string
}

export interface Item {
  id: ID
  kind: string
  snippet: Snippet
}

export interface ID {
  kind: string
  videoId: string
  channelId?: string
}

export interface Snippet {
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishTime: Date
  publishedAt: Date
  thumbnails: Thumbnails
  title: string
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

export interface DataDetailsVideos {
  items: ItemVideoDetail[]
  kind: string
  pageInfo: PageInfo
}

export interface ItemVideoDetail {
  contentDetails: ContentDetails
  id: string
  kind: string
  snippet: SnippetVideoDetails
  statistics: Statistics
}

export interface ContentDetails {
  caption: string
  contentRating?: unknown
  definition: string
  dimension: string
  duration: string
  licensedContent: boolean
  projection: string
}

//  interface ContentRating {}

export interface SnippetVideoDetails {
  categoryId: string
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  localized: Localized
  publishedAt: string
  tags: string[]
  thumbnails: ThumbnailsVideoDetails
  title: string
}

interface Localized {
  description: string
  title: string
}

interface ThumbnailsVideoDetails {
  default: Default
  high: Default
  maxres: Default
  medium: Default
  standard: Default
}

export interface Statistics {
  commentCount: string
  favoriteCount: string
  likeCount: string
  viewCount: string
}
