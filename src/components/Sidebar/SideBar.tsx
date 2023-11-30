import { Stack } from '@chakra-ui/react'
import { CategoryComponents } from './components'
import { categoryData } from '../../constant/dataRoute'

const SideBar = ({ ...defaultprops }) => {
  return (
    <Stack
      as="nav"
      pt={4}
      w={'fit-content'}
      borderInlineEnd="1px solid #c1c1c1"
      minH={'100vh'}
      left={0}
      zIndex={'100'}
      background={'whiteAlpha.200'}
      position={'fixed'}
      gap={4}
      {...defaultprops}
    >
      {categoryData.map((element) => (
        <CategoryComponents
          category={element.category}
          key={element.id}
          dataRoute={element.dataRoute}
        />
      ))}
    </Stack>
  )
}

export default SideBar
