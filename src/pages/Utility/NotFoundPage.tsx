import { IsError } from '../../components'
import { Center } from '@chakra-ui/react'

const NotFoundPage = () => {
  return (
    <Center w={'full'} h={'85vh'}>
      NotFoundPage
      <IsError error={true} />
    </Center>
  )
}

export default NotFoundPage
