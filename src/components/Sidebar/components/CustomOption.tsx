import { HStack, Heading } from "@chakra-ui/react";
import { Link as WouterLink } from "wouter";
import { HandleScrollToTop } from "../../../utils";
import { useSidebarContext } from "../context/context";
import React from "react";

interface optionCustom {
  route: string;
  title: string;
  children: React.ReactNode;
}
const CustomOption = ({ route, children, title }: optionCustom) => {
  const { focus, setFocus } = useSidebarContext();
  return (
    <WouterLink
      className={focus.value === title ? "links-focus" : "links"}
      to={route}
      onClick={() => {
        setFocus({ value: title });
        HandleScrollToTop({
          direction: "top",
          coordinate: 0,
          behavior: "smooth",
        });
      }}
    >
      <HStack
        cursor={"pointer"}
        gap={2}
        py={2}
        align="center"
        justify="flex-start"
      >
        {children}
        <Heading textTransform="capitalize" fontWeight="medium" fontSize="lg">
          {title}
        </Heading>
      </HStack>
    </WouterLink>
  );
};

export default CustomOption;
