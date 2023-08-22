import { IconType } from 'react-icons'

export type CardDetails = {
  srcImage: string
  srcChanell: string
  srcImageAlt: string
  srcChanellAlt: string
  titleName: string
  chanellName: string
  channelId?: string
  viewsVideos: string
  videoDuration: number | string
  dateVideos: string
  iconVideos?: IconType
  key?: string
  idVideo: string
}

export interface DataRoute {
  route: string
  title: string
  id: string
  iconOptions: IconType
}

export interface CategoryData {
  category: string
  id?: string
  dataRoute: DataRoute[]
}
