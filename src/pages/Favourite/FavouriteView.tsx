import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { FavouriteDetails } from '../../types'
import { Center, HStack, Heading, Image, Text } from '@chakra-ui/react'

import { Link as WouterLink } from 'wouter'

const FavouriteView = () => {
  const sliceData = useSelector<RootState, [] | FavouriteDetails[]>(
    (state) => state.persisted.FavouriteList
  )

  console.log(sliceData)
  if (!sliceData.length) {
    return (
      <Center flexDir={'column'} w={'full'} height={'full'} flex={1} gap={4}>
        <Heading>No hay videos favoritos</Heading>
        <WouterLink href="/">
          <Text
            cursor={'pointer'}
            _hover={{ color: '#dcaff0' }}
            fontWeight={'600'}
            color={'text.secondary'}
          >
            Mira los videos en tendencia
          </Text>
        </WouterLink>
      </Center>
    )
  }
  return (
    <HStack my={2} gap={4} p={2} flexWrap={'wrap'}>
      {sliceData?.map((item: FavouriteDetails) => (
        <HStack flex={'1 0 375px'} gap={4}>
          <Image
            src={item?.thumbnail}
            w={'140px'}
            h={'90px'}
            borderRadius={'sm'}
            boxShadow={'full'}
            objectFit={'cover'}
          />
          <Text>{item?.title}</Text>
        </HStack>
      ))}
    </HStack>
  )
}

export default FavouriteView
