import { Center, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Center boxSize={'full'} minW={'100%'} minH={'100vh'}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black" size="xl" />{' '}
    </Center>
  )
}

export default Loader
