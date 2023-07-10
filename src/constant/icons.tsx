import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { BiSolidLike, BiSolidVideos, BiMoviePlay } from 'react-icons/bi'
import { BsFillBellFill, BsFillCameraVideoFill } from 'react-icons/bs'
import { CgMenuGridO } from 'react-icons/cg'
import { SiYoutubemusic, SiYoutubestudio, SiYoutubegaming, SiYoutube } from 'react-icons/si'
import { MdVideoLibrary, MdOutlineHistory } from 'react-icons/md'
import { LuFlame } from 'react-icons/lu'

export const icons: { [key: string]: JSX.Element } = {
  outlineMenu: <AiOutlineMenu />,
  fillHome: <AiFillHome />,
  menuGridO: <CgMenuGridO />,
  fillCameraVideoFill: <BsFillCameraVideoFill />,
  solidMoviePlay: <BiMoviePlay />,
  solidVideos: <BiSolidVideos />,
  solidLike: <BiSolidLike />,
  fillBellFill: <BsFillBellFill />,
  videoLibrary: <MdVideoLibrary />,
  outlineHistory: <MdOutlineHistory />,
  youtube: <SiYoutube />,
  youtubeGaming: <SiYoutubegaming />,
  youtubeStudio: <SiYoutubestudio />,
  youtubeMusic: <SiYoutubemusic />,
  fireFlameCurved: <LuFlame />
}
