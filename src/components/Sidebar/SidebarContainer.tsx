import { Stack, Divider } from '@chakra-ui/react'
import { LogoComponent, SideBarProvider, CategoryComponents } from '..'
import { categoryData } from '../../constant/dataRoute'

const SidebarContainer = () => {
  return (
    <Stack gap={4} justifyItems={'start'} boxSize={'full'}>
      <LogoComponent />
      <Divider />
      <SideBarProvider>
        {categoryData.map((element) => (
          <CategoryComponents
            category={element.category}
            key={element.id}
            dataRoute={element.dataRoute}
          />
        ))}
      </SideBarProvider>
    </Stack>
  )
}

export default SidebarContainer
