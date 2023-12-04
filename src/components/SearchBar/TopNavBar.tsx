import { HStack } from '@chakra-ui/react'
import { SearchBar } from './components'
import MenuDrawer from './components/MenuDrawer'

const TopNavbar = () => {
  return (
    <HStack
      position={'absolute'}
      top={4}
      zIndex={'overlay'}
      spacing={0}
      gap={4}
      borderRadius={'xl'}
      py={2}
      pr={1}
      justifyContent={'space-between'}
      w={'-webkit-fill-available'}
      className="card"
    >
      <MenuDrawer />
      <SearchBar />
    </HStack>
  )
}

export default TopNavbar
