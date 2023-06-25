import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/Sidebar/SideBar";
import { SideBarProvider } from "../components/Sidebar/context/context";
import HeaderPublicity from "../components/HeaderPublicity";

type Props = { children: React.ReactNode };

const NavigationLayout = (props: Props) => {
  return (
    <SideBarProvider>
      <Box
        display="grid"
        position={"relative"}
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          lg: "265px repeat(2, 1fr)",
        }}
        gridTemplateRows={{ base: "repeat(2,fit-content)", lg: "auto repeat(2, 1fr)" }}
        gap="0px 0px"
        gridAutoFlow="row"
        gridTemplateAreas={{
          base: `"Navbar Navbar"
        "Content Content"
        "Content Content"`,
          lg: `"SideBard Navbar Navbar"
                            "SideBard Content Content"
                            "SideBard Content Content"`,
        }}
      >
        <Box as="nav" gridArea="Navbar">
          <HeaderPublicity />
        </Box>
        <Stack
          as="nav"
          gridArea="SideBard"
          position={"fixed"}
          justifyContent={"center"}
          h={"100vh"}
          left={0}
          top={0}
          bgColor={"#ccc"}
          display={{ base: "none", lg: "flex" }}
        >
          <SideBar display={"flex"} />
        </Stack>
        <Box as="main" minH={'50vh'} gridArea="Content">
          {props.children}
        </Box>
      </Box>
    </SideBarProvider>
  );
};

export default NavigationLayout;
