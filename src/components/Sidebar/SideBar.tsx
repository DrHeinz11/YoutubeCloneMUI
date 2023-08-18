import { Divider, Stack } from '@chakra-ui/react'
import { ButtonLogo, CategoryComponents, General } from './components'
import { categoryData } from '../../constant/dataRoute'

const SideBar = ({ ...defaultprops }) => {
  return (
    <Stack
      as="nav"
      pt={4}
      w={'fit-content'}
      borderInlineEnd="1px solid #c1c1c1"
      minH={'100vh'}
      gap={4}
      {...defaultprops}
    >
      <ButtonLogo />
      <Divider />
      {categoryData.map((element) => (
        <CategoryComponents
          category={element.category}
          key={element.id}
          dataRoute={element.dataRoute}
        />
      ))}
      <Divider />
      <General />
    </Stack>
  )
}

export default SideBar
