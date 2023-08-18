import { HStack } from '@chakra-ui/react'
import { MediaRedirectButton, SearchBar, MediaOptionButton } from './components'

const TopNavbar = () => {
  return (
    <HStack
      position={'absolute'}
      top={4}
      zIndex={'overlay'}
      spacing={0}
      gap={4}
      bgColor={'#fafafa'}
      borderRadius={'xl'}
      py={2}
      pr={1}
      justifyContent={'space-between'}
      w={'-webkit-fill-available'}
    >
      <MediaRedirectButton />
      <SearchBar />
      <MediaOptionButton />
    </HStack>
  )
}

export default TopNavbar
