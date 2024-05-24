import { IsError } from '../../components'
import { Center } from '@chakra-ui/react'
import { RouteParams } from '../../types/UtilityTypes'

const NotFoundPage = ({ params }: RouteParams) => {
  console.log(params)
  return (
    <Center w={'full'} h={'85vh'}>
      NotFoundPage
      <IsError error={true} />
    </Center>
  )
}

export default NotFoundPage
