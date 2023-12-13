import {
  useDisclosure,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text
} from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { SideBar, SideBarProvider } from '../..'

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const firstField = React.useRef()

  return (
    <SideBarProvider>
      <Button
        margin={'0 !important'}
        type="button"
        aria-label={'Menu'}
        variant={'topNavBar'}
        px={[0, 4]}
        onClick={onOpen}
        color={'white'}
      >
        <GiHamburgerMenu size="22px" />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>

          <DrawerBody overflowY={'auto'}>
            <Box w={'full'} h={'full'}>
              <SideBar />
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            {' '}
            <Box w={'full'} h={'full'} bgColor={'green'}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, aperiam
                accusantium!
              </Text>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </SideBarProvider>
  )
}

export default MenuDrawer
