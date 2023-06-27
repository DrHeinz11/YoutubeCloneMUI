import { HStack, Heading } from "@chakra-ui/react";
import { Link } from "wouter";
import { HandleScrollToTop } from "../../../utils";
import { YoutubeIcon } from "../../../assets";
import { useSidebarContext } from "../context/useSidebarContext";

const ButtonLogo = () => {
  const { setFocus } = useSidebarContext();
  return (
    <Link
      to={"/"}
      onClick={() =>
        HandleScrollToTop({
          direction: "top",
          coordinate: 0,
          behavior: "smooth",
        })
      }
    >
      <HStack
        onClick={() => setFocus({ value: "home" })}
        _hover={{ opacity: 0.5 }}
      >
        <YoutubeIcon />
        <Heading
          display="flex"
          flexDir="row"
          alignItems="center"
          as="h4"
          fontSize="xl"
        >
          YouTube-Stream
        </Heading>
      </HStack>
    </Link>
  );
};

export default ButtonLogo;
