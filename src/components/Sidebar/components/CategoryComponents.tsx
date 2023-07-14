import { Stack } from '@chakra-ui/react'
import CustomOption from './CustomOption'
import { CategoryData } from '../../../types'

const CategoryComponents = ({ dataRoute }: CategoryData) => {
  return (
    <Stack>
      {/* <CategoryHeading>{category}</CategoryHeading> */}
      <Stack>
        {dataRoute.map((categoryData) => (
          <CustomOption route={categoryData.route} title={categoryData.title} key={categoryData.id}>
            <categoryData.iconOptions size={'20px'} />
          </CustomOption>
        ))}
      </Stack>
    </Stack>
  )
}

export default CategoryComponents
