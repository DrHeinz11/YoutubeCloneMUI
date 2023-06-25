import { BsCameraReelsFill, BsCollectionPlayFill, BsFillCompassFill, BsFillStarFill, BsHouseDoorFill } from "react-icons/bs";
import { CategoryData } from "../types";
import { MdWatchLater } from "react-icons/md";

export const categoryData: CategoryData[] = [
    {
      category: "Category",
      id: 1,
      dataRoute: [
        {
          route: "/series/all",
          title: "Series/Tv-Show",
          id: 12,
          iconOptions: BsCollectionPlayFill,
        },
        {
          route: "/movie/all",
          title: "Movie",
          id: 12,
          iconOptions: BsCameraReelsFill,
        },
      ],
    },
    {
      category: "Library",
      id: 1,
      dataRoute: [
        {
          route: "/see-later/",
          title: "See Later",
          id: 12,
          iconOptions: MdWatchLater,
        },
        {
          route: "/top-rated",
          title: "Top rated",
          id: 12,
          iconOptions: BsFillStarFill,
        },
      ],
    },
    {
      category: "Menu",
      id: 1,
      dataRoute: [
        {
          route: "/",
          title: "Home",
          id: 12,
          iconOptions: BsHouseDoorFill,
        },
        {
          route: "/discover",
          title: "Discover",
          id: 12,
          iconOptions: BsFillCompassFill,
        },
      ],
    },
  ];
  
  