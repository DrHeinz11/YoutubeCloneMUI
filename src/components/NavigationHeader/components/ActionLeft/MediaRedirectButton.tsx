import { Button, HStack } from '@chakra-ui/react'
import { DataRouteButton } from '../../../../constant/dataRoute'
import { navigate } from 'wouter/use-location'

const MediaRedirectButton = () => {
  const handleClick = (route: string) => navigate(route)
  return (
    <HStack display={{ base: 'none', sm: 'flex' }} color={'white'} spacing={0} gap={2}>
      {DataRouteButton.slice(0, -1).map((buttonItem) => (
        <Button
          key={buttonItem.id}
          onClick={() => handleClick(buttonItem.route)}
          margin={'0 !important'}
          type="button"
          aria-label={buttonItem.title}
          variant={'topNavBar'}
          px={[0, 4]}
        >
          <buttonItem.iconOptions size={'22px'} />
        </Button>
      ))}
    </HStack>
  )
}

export default MediaRedirectButton
