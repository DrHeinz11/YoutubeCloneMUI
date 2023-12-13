import { Container, HStack } from '@chakra-ui/react'
import React from 'react'
import TopNavbar from '../components/SearchBar/TopNavBar'

type Props = {
  children: React.ReactNode
}

const NavigationLayout = ({ children }: Props) => {
  return (
    // <SideBarProvider>
    <HStack
      bgColor={'palette.background'}
      minH={'100vh'}
      alignItems={'flex-start'}
      overflow={'auto'}
      gap={0}
      margin={'0 auto'}
    >
      <Container
        position={'relative'}
        margin={'0 auto'}
        w={'full'}
        maxW={'1680px'}
        flex={'1'}
        p="0"
        pt={'4.5rem'}
        as={'main'}
      >
        <TopNavbar />
        {children}
      </Container>
    </HStack>
    // {/* </SideBarProvider> */}
  )
}

export default NavigationLayout
