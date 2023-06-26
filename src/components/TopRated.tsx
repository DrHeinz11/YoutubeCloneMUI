import { Button } from "@chakra-ui/react";
import { useDispatch} from "react-redux";
import { searchKeyword } from "../store/reducers/searchReducer";

const TopRated = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(searchKeyword("ariana grande"));
  return <Button onClick={handleClick}>TopRated</Button>;
};

export default TopRated;
