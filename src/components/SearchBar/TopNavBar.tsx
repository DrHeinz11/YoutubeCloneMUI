import { HStack } from "@chakra-ui/react";
import {
  MediaRedirectButton,
  SearchBar,
  MediaOptionButton,
} from "./components";

const TopNavbar = () => {
  return (
    <HStack
      spacing={0}
      gap={4}
      bgColor={"#fafafa"}
      px={4}
      py={2}
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
