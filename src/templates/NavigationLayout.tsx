import { Divider, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import TopNavbar from '../components/SearchBar/TopNavBar'
import { CategoryComponents, LogoComponent, SideBarProvider } from '../components'
import { categoryData } from '../constant/dataRoute'

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
        h={'98.5vh'}
        position={'fixed'}
        w={'20%'}
        alignItems={'flex-start'}
        p={4}
      >
        <Stack gap={4} justifyItems={'start'} boxSize={'full'}>
          <LogoComponent />
          <Divider />
          <SideBarProvider>
            {categoryData.map((element) => (
              <CategoryComponents
                category={element.category}
                key={element.id}
                dataRoute={element.dataRoute}
              />
            ))}
          </SideBarProvider>
        </Stack>
      </GridItem>

      <GridItem
        position={'relative'}
        margin={'0 auto'}
        w={'100%'}
        maxW={'2250px'}
        area={'content'}
        p="0"
        as={'main'}
        gridTemplateRows={'75px 1fr'}
      >
        <TopNavbar />
        {children}
      </GridItem>
    </Grid>
  )
}

export default NavigationLayout
