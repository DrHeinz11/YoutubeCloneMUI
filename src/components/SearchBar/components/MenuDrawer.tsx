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
  Text,
  HStack
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { LogoComponent } from '../..'

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        margin={'0 !important'}
        type="button"
        aria-label={'Menu'}
        variant={'topNavBar'}
        px={[0, 4]}
        onClick={onOpen}
        color={'white'}
        display={{ base: 'contents', lg: 'none' }}
      >
        <GiHamburgerMenu size="22px" />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <LogoComponent />
          </DrawerHeader>

          <DrawerBody overflowY={'auto'}>
            <Box w={'full'} h={'full'}>
              {/* <SideBar /> */}
              <HStack>
                <Text>Hola esto es una prueba</Text>
                <Box boxSize={'22px'} bgColor={'red'} borderRadius={'full'} />
              </HStack>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Text>© 2024 Franco Martin</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>{' '}
    </>
  )
}

export default MenuDrawer
