import { BsCameraReelsFill, BsCollectionPlayFill, BsFillCompassFill, BsFillStarFill, BsHouseDoorFill } from "react-icons/bs";
import { CategoryData } from "../types";
import { MdWatchLater } from "react-icons/md";

export const categoryData: CategoryData[] = [
  {
    category: "Category",
    id: "#001ABC",
    dataRoute: [
      {
        route: "/series/all",
        title: "Series/Tv-Show",
        id: "#002DEF",
        iconOptions: BsCollectionPlayFill,
      },
      {
        route: "/movie/all",
        title: "Movie",
        id: "#003GHI",
        iconOptions: BsCameraReelsFill,
      },
    ],
  },
  {
    category: "Library",
    id: "#004JKL",
    dataRoute: [
      {
        route: "/see-later/",
        title: "See Later",
        id: "#005MNO",
        iconOptions: MdWatchLater,
      },
      {
        route: "/top-rated",
        title: "Top rated",
        id: "#006PQR",
        iconOptions: BsFillStarFill,
      },
    ],
  },
  {
    category: "Menu",
    id: "#007STU",
    dataRoute: [
      {
        route: "/",
        title: "Home",
        id: "#008VWX",
        iconOptions: BsHouseDoorFill,
      },
      {
        route: "/discover",
        title: "Discover",
        id: "#009YZA",
        iconOptions: BsFillCompassFill,
      },
    ],
  },
];
