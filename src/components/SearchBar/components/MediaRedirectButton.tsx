import { Button, HStack } from '@chakra-ui/react'
import { DataRouteButton } from '../../../constant/dataRoute'
import { navigate } from 'wouter/use-location'

const MediaRedirectButton = () => {
  const handleClick = (route: string) => navigate(route)
  return (
    <HStack color={'white'} spacing={0} gap={2}>
      {DataRouteButton.slice(0, -1).map((buttonItem) => (
        <Button
          key={buttonItem.id}
          margin={'0 !important'}
          onClick={() => handleClick(buttonItem.route)}
          type="button"
          aria-label={buttonItem.title}
          variant={'topNavBar'}
          px={[0,4]}
        >
          <buttonItem.iconOptions size={'22px'} />
        </Button>
      ))}
    </HStack>
  )
}

export default MediaRedirectButton
