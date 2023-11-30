import { Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { SideBarProvider } from '../components/Sidebar/context/context'
import TopNavbar from '../components/SearchBar/TopNavBar'
import { SideBar } from '../components'

type Props = {
  children: React.ReactNode
}

const NavigationLayout = ({ children }: Props) => {
  return (
    <SideBarProvider>
      <HStack
        className="container"
        minH={'100vh'}
        alignItems={'flex-start'}
        overflow={'auto'}
        gap={0}
      >
        <SideBar display="flex" />
        <Container position={'relative'} flex={'1'} p="0" as={'main'} variant={'section'}>
          <TopNavbar />
          {children}
        </Container>
      </HStack>
    </SideBarProvider>
  )
}

export default NavigationLayout
