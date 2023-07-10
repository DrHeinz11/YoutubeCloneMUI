import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../components/Sidebar/SideBar'
import { SideBarProvider } from '../components/Sidebar/context/context'
import TopNavbar from '../components/SearchBar/TopNavBar'

type Props = {
  children: React.ReactNode
}

const NavigationLayout = ({ children }: Props) => {
  return (
    <SideBarProvider>
      <Box
        display="grid"
        w="full"
        bgColor="#ccc"
        overflowX="hidden"
        position="relative"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          lg: '265px repeat(2, 1fr)'
        }}
        gridTemplateRows={{
          base: 'repeat(2, fit-content)',
          lg: 'max-content 260px repeat(2, 1fr)'
        }}
        gap="4"
        gridAutoFlow="row"
        gridTemplateAreas={{
          base: `"Navbar Navbar"
                  "Content Content"
                  "Content Content"`,
          lg: `"SideBard Navbar Navbar"
                "SideBard Content Content"
                "SideBard Content Content"`
        }}
      >
        <Box as="nav" gridArea="Navbar" h="58px" w="75vw" my={2} mx={4}>
          <TopNavbar />
        </Box>
        <Stack
          as="nav"
          gridArea="SideBard"
          position="fixed"
          justifyContent="center"
          h="96vh"
          left={2}
          top={2}
          display={{ base: 'none', lg: 'flex' }}
          zIndex="overlay"
        >
          <SideBar display="flex" />
        </Stack>
        <Box as="main" minH="50vh" gridArea="Content">
          {children}
        </Box>
      </Box>
    </SideBarProvider>
  )
}

export default NavigationLayout
