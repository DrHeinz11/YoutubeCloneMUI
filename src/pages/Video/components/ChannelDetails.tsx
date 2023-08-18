import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { Loader, IsError } from '../../../components'
import { useGetDetailChannelQuery } from '../../../store/reducers/apiFetch'
import { ItemChannel, RootChannelData } from '../../../types/ChannelDetailType'
import { Button, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link as WouterLink } from 'wouter'
import { formatearNumero } from '../../../utils/ViewsFormater'

type Props = { channelId: string }

const ChannelDetails = (props: Props) => {
  const { data, isLoading, isError, error } = useGetDetailChannelQuery<{
    data: RootChannelData
    error: FetchBaseQueryError | SerializedError
    isLoading: boolean
    isError: boolean
  }>({ channelId: props.channelId })
  if (isLoading) return <Loader />

  if (isError) return <IsError error={error} />
  return (
    <>
      {data.items.map((item: ItemChannel) => (
        <Stack
          key={item.id}
          cursor={'pointer'}
          bgColor={'blackAlpha.100'}
          borderRadius={'0'}
          border={'2px solid #555'}
          p={2}
          gap={1}
          zIndex={'skipLink'}
        >
          {' '}
          <Heading fontSize={'xl'} as={WouterLink} href={`/channels?${item.snippet.customUrl}`}>
            {item.snippet.title}
          </Heading>
          <HStack>
            <WouterLink href={`/channels?${item.snippet.customUrl}`}>
              <Image
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
                boxSize={item.snippet.thumbnails.default.width}
                borderRadius={'0'}
                border={'2px solid #555'}
              />{' '}
            </WouterLink>
            <Stack
              flex={1}
              bgColor={'blackAlpha.200'}
              borderRadius={'0'}
              border={'2px solid #555'}
              p={2}
            >
              <Text fontWeight={'bold'}>
                {formatearNumero(item.statistics.subscriberCount)} <span>subscribers</span>
              </Text>
              <Button onClick={() => alert('xd')} zIndex={'overlay'} variant={'topNavBar'}>
                Subscribe
              </Button>
            </Stack>
          </HStack>
        </Stack>
      ))}
    </>
  )
}

export default ChannelDetails
