import { IconType } from "react-icons";

export type CardDetails = {
  srcImage: string;
  srcChanell: string;
  srcImageAlt: string;
  srcChanellAlt: string;
  titleName: string;
  chanellName: string;
  viewsVideos: string;
  videoDuration: number | string;
  dateVideos: string;
  iconVideos?: IconType;
  key?: string;
  idVideo: string;
};

interface DataRoute {
  route: string;
  title: string;
  id: number;
  iconOptions: IconType;
}

export interface CategoryData {
  category: string;
  id?: number;
  dataRoute: DataRoute[];
}
