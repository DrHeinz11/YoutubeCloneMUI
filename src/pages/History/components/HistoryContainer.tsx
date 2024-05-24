import { Center, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { HistoryDetailsTest } from '../../../types'
import { Link as WouterLink } from 'wouter'

const HistoryContainer = () => {
  const sliceData = useSelector<RootState, [] | HistoryDetailsTest[]>(
    (state) => state.persisted.HistorySlice
  )

  if (!sliceData.length) {
    return (
      <Center flexDir={'column'} w={'full'} height={'full'} flex={1} gap={4}>
        <Heading>No hay historial de reproducciones</Heading>
        <WouterLink href="/">
          <Text
            cursor={'pointer'}
            _hover={{ color: '#dcaff0' }}
            fontWeight={'600'}
            color={'text.secondary'}
          >
            Mira nuestras recomendaciones para ti
          </Text>
        </WouterLink>
      </Center>
    )
  }

  return (
    <HStack my={2} gap={4} p={2} flexWrap={'wrap'}>
      {sliceData?.map((item: HistoryDetailsTest) => (
        <HStack key={item.videoId ?? item.channelId} flex={'1 0 375px'} gap={4}>
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

export default HistoryContainer
