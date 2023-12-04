import { Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { SideBarProvider } from '../components/Sidebar/context/context'
import TopNavbar from '../components/SearchBar/TopNavBar'

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
        maxW={'1640px'}
        margin={'0 auto'}
      >
        {/* <SideBar display="flex" pt={'20'} /> */}
        <Container
          position={'relative'}
          margin={'0 auto'}
          flex={'1'}
          p="0"
          as={'main'}
          variant={'section'}
        >
          <TopNavbar />
          {children}
        </Container>
      </HStack>
    </SideBarProvider>
  )
}

export default NavigationLayout
