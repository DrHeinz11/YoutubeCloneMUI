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
      <HStack className='container' gap={2} minH={'100vh'} alignItems={'flex-start'} px={2} overflow={'auto'}>
        {/* <SideBar display="flex" /> */}
        <Container position={'relative'} flex={'1'} p="0" pt={'20'} as={'main'} variant={'section'}>
          <TopNavbar />
          {children}
        </Container>
      </HStack>
    </SideBarProvider>
  )
}

export default NavigationLayout
