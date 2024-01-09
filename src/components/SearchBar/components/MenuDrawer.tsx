import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
  Stack
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CategoryComponents, LogoComponent, SideBarProvider } from '../..'
import { categoryData } from '../../../constant/dataRoute'

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
      <Drawer isOpen={isOpen} placement="left" size={['full','md']} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <LogoComponent onClose={onClose} />
          </DrawerHeader>

          <DrawerBody overflowY={'auto'}>
            <Stack w={'full'} h={'full'}>
              <SideBarProvider isOpen={onClose}>
                {categoryData.map((element) => (
                  <CategoryComponents
                    category={element.category}
                    key={element.id}
                    dataRoute={element.dataRoute}
                  />
                ))}
              </SideBarProvider>
            </Stack>
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
