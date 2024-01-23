import { Stack } from '@chakra-ui/react'
import CustomOption from './CustomOption'
import { CategoryData } from '../../../types'
import SubscriptionContainer from './SubscriptionContainer'

const CategoryComponents = ({ dataRoute }: CategoryData) => {
  return (
    <Stack p={2} w={'fit-content'}>
      {dataRoute.map((categoryData) => (
        <CustomOption route={categoryData.route} title={categoryData.title} key={categoryData.id}>
          <categoryData.iconOptions size={'22px'} />
        </CustomOption>
      ))}
      <SubscriptionContainer />
    </Stack>
  )
}

export default CategoryComponents
