import { HStack, Heading } from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "wouter";
import { HandleScrollToTop } from "../../../utils";
import { useSidebarContext } from "../context/context";
import { YoutubeIcon } from "../../../assets";

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
