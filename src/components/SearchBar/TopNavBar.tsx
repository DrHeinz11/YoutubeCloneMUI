import { Avatar, HStack } from '@chakra-ui/react'
import { MediaOptionButton, MediaRedirectButton, SearchBar } from './components'
import MenuDrawer from './components/MenuDrawer'

const TopNavbar = () => {
  return (
    <HStack
      position={'sticky'}
      top={'4px'}
      backgroundColor={'#292929'}
      borderRadius={'md'}
      zIndex={'overlay'}
      spacing={0}
      gap={4}
      px={4}
      py={2}
      margin={'0 auto !important'}
      justifyContent={'space-between'}
    >
      <MenuDrawer />
      <MediaRedirectButton />
      <SearchBar />
      <MediaOptionButton />
      <Avatar
        borderRadius={'md'}
        size={{ base: 'sm', '2xl': 'md' }}
        name="Franco Martin"
        src="https://bit.ly/broken-link"
      />
    </HStack>
  )
}

export default TopNavbar
