import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import TopNavbar from '../components/SearchBar/TopNavBar'
import { LogoComponent } from '../components'

type Props = {
  children: React.ReactNode
}

const NavigationLayout = ({ children }: Props) => {
  return (
    <Grid
      bgColor={'black'}
      templateAreas={{
        base: `
      "content"
      "content"`,
        lg: `
    "drawer content"
    "drawer content"`
      }}
      gridTemplateColumns={{ base: '1fr', lg: '20% 1fr' }}
      minHeight="100vh"
      gap="2"
      p="1"
    >
      <GridItem
        display={{ base: 'none', lg: 'flex' }}
        area={'drawer'}
        borderRadius={'md'}
        bgColor={'whiteAlpha.300'}
        h={'99vh'}
        position={'fixed'}
        w={'20%'}
        alignItems={'flex-start'}
        p={4}
      >
        <LogoComponent />
      </GridItem>

      <GridItem
        position={'relative'}
        margin={'0 auto'}
        w={'100%'}
        maxW={'1680px'}
        flex={'1'}
        area={'content'}
        p="0"
        pt={'4.5rem'}
        as={'main'}
      >
        <TopNavbar />
        {children}
      </GridItem>
    </Grid>
  )
}

export default NavigationLayout
