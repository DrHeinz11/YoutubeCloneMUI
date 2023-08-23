import { Center, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Center boxSize={'full'} minH={'50vh'}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="purple.500" size="xl" />{' '}
    </Center>
  )
}

export default Loader
