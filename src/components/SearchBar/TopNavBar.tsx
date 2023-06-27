import { HStack } from "@chakra-ui/react";
import {
  MediaRedirectButton,
  SearchBar,
  MediaOptionButton,
} from "./components";

const TopNavbar = () => {
  return (
    <HStack
      position={"fixed"}
      top={4}
      zIndex={"overlay"}
      spacing={0}
      gap={4}
      bgColor={"#fafafa"}
      px={4}
      py={2}
      w={'75vw'}
      borderRadius={"xl"}
      justifyContent={"space-between"}
    >
      <MediaRedirectButton />
      <SearchBar />
      <MediaOptionButton />
    </HStack>
  );
};

export default TopNavbar;