import { Button, HStack, Heading } from '@chakra-ui/react'
import { DataRouteButton } from '../../../constant/dataRoute'
import { navigate } from 'wouter/use-location'
// import { TbGridDots } from 'react-icons/tb'
import { GoBellFill } from 'react-icons/go'
import OptionPopover from './OptionPopover'

const MediaOptionButton = () => {
  return (
    <HStack color={'white'} justifyContent={'flex-end'} spacing={0} gap={4}>
      {DataRouteButton.slice(-1).map((buttonItem) => (
        <Button
          variant={'topNavBar'}
          margin={'0 !important'}
          aria-label={buttonItem.title}
          type="button"
          key={buttonItem.id}
          onClick={() => navigate(buttonItem.route)}
          px={[0, 4]}
        >
          <buttonItem.iconOptions size={'22px'} />
        </Button>
      ))}
      <HStack display={{ base: 'none', lg: 'flex' }} spacing={0} gap={4}>
        {/* <OptionPopover icon={TbGridDots} /> */}
        <OptionPopover icon={GoBellFill}>
          <Heading>Prueba a ver si funcionas 2do button</Heading>
        </OptionPopover>
        {/* <OptionPopover
          avatarSrc="https://cdn.shopify.com/s/files/1/0366/8243/2650/files/1200px-Spinnin_Records_logo.svg_08319ff4-7df3-4cd1-ad3d-be31c429b918_medium.png?v=1585351144"
          variant="avatar"
          icon={undefined}
        /> */}
      </HStack>
    </HStack>
  )
}

export default MediaOptionButton
