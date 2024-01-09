import { BsFillCameraVideoFill } from 'react-icons/bs'
import { CategoryData, DataRoute as DataRouteType } from '../types'
import { LuFlame } from 'react-icons/lu'
import { PiFilmStrip } from 'react-icons/pi'
import { AiFillHome } from 'react-icons/ai'
import { GoBookmarkFill, GoHeartFill } from 'react-icons/go'
import { RiFolderHistoryFill } from 'react-icons/ri'

export const categoryData: CategoryData[] = [
  {
    category: '',
    id: '#001ABC',
    dataRoute: [
      // {
      //   route: '/explore',
      //   title: 'Explore',
      //   id: '#102DEF',
      //   iconOptions: ExploreIcon
      // },
      // {
      //   route: '/shorts',
      //   title: 'Shorts',
      //   id: '#005MNO',
      //   iconOptions: ShortIcon
      // },
      // {
      //   route: '/subscription',
      //   title: 'Subcriptions',
      //   id: '#006PQR',
      //   iconOptions: SubscriptionIcon
      // },
      // {
      //   route: '/library/all',
      //   title: 'Library',
      //   id: '#002DEF',
      //   iconOptions: LibraryIcon
      // },
      {
        route: '/history/all',
        title: 'History',
        id: '#003GHI',
        iconOptions: RiFolderHistoryFill
      },
      {
        route: '/watch-later',
        title: 'Watch later',
        id: '#103GHY',
        iconOptions: GoBookmarkFill
      },
      {
        route: '/liked-video',
        title: 'Liked video',
        id: '#203YHI',
        iconOptions: GoHeartFill
      },
      // {
      //   route: '/music/kpop',
      //   title: 'Kpop',
      //   id: '#003GHY',
      //   iconOptions: BsMusicNoteList
      // },
      // {
      //   route: '/programming',
      //   title: 'Programming',
      //   id: '#003YHI',
      //   iconOptions: FaCode
      // }
    ]
  }
  // {
  //   category: "Menu",
  //   id: "#007STU",
  //   dataRoute: [
  //     {
  //       route: "/",
  //       title: "Home",
  //       id: "#008VWX",
  //       iconOptions: BsHouseDoorFill,
  //     },
  //     {
  //       route: "/discover",
  //       title: "Discover",
  //       id: "#009YZA",
  //       iconOptions: BsFillCompassFill,
  //     },
  //   ],
  // },
]

export const DataRouteButton: DataRouteType[] = [
  {
    route: '/',
    title: 'Home',
    id: '#011EFG',
    iconOptions: AiFillHome
  },
  {
    route: '/trends',
    title: 'Trends',
    id: '#010BCD',
    iconOptions: LuFlame
  },
  {
    route: '/film-upload',
    title: 'Film Upload',
    id: '#012HYJ',
    iconOptions: PiFilmStrip
  },
  {
    route: '/film-maker',
    title: 'Filmmaker',
    id: '#012HIJ',
    iconOptions: BsFillCameraVideoFill
  }
]
