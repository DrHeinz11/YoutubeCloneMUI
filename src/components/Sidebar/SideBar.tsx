import { Stack } from '@chakra-ui/react'
import { ButtonLogo, CategoryComponents, General } from './components'
import { categoryData } from '../../constant/dataRoute'

const SideBar = ({ ...defaultprops }) => {
  return (
    <Stack
      as="nav"
      // px={4}
      // py={2}
      p={2}
      mt={'5px'}
      // minW="264px"
      // maxW="264px"
      border="1px solid #c1c1c1"
      justifyContent={{ base: 'space-around', '2xl': 'flex-start' }}
      flex={1}
      bgColor={'#fafafa'}
      borderRadius={'xl'}
      align={'center'}
      {...defaultprops}
    >
      <ButtonLogo />
      {categoryData.map((element) => (
        <CategoryComponents
          category={element.category}
          key={element.id}
          dataRoute={element.dataRoute}
        />
      ))}
      <General />
    </Stack>
  )
}

export default SideBar
