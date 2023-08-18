import { Container, HStack } from '@chakra-ui/react'
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
      {/* <Box
        display="grid"
        w="full"
        bgColor="#ccc"
        overflowX="hidden"
        position="relative"
        gridTemplateColumns={{
          base: 'repeat(2, 1fr)',
          lg: '75px repeat(2, 1fr)'
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
        <Box as="nav" gridArea="Navbar" h="58px" w={{ base: 'full', md: '75vw' }} my={2} mx={4}>
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
        <Stack as="main" minH="50vh" gridArea="Content">
          {children}
        </Stack>
      </Box> */}
      <HStack bgColor={'#fafafa'} gap={4} alignItems={'flex-start'} overflow={'auto'}>
        <SideBar display="flex" />
        <Container position={'relative'} flex={'1'} p="0" pt={'20'} as={'main'} variant={'section'}>
          <TopNavbar />
          {children}
        </Container>
      </HStack>
    </SideBarProvider>
  )
}

export default NavigationLayout
