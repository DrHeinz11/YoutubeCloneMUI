import { HStack, Heading } from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "wouter";
import { HandleScrollToTop } from "../../../utils";
import { useSidebarContext } from "../context/context";


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
        mr="2"
        onClick={() => setFocus({ value: "home" })}
        _hover={{ opacity: 0.5 }}
      >
        <Heading
          display="flex"
          flexDir="row"
          alignItems="center"
          as="h4"
          fontSize="2xl"
        >
          M<BsFillEyeFill style={{ width: "1.5rem", height: "1.5rem" }} />{" "}
          vieStream
        </Heading>
      </HStack>
    </Link>
  );
};

export default ButtonLogo;
