import React from 'react'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { Loader, IsError } from '../../../components'
import { useGetDetailChannelQuery } from '../../../store/reducers/apiFetch'
import { ItemChannel, RootChannelData } from '../../../types/ChannelDetailType'
import { Button, Divider, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link as WouterLink } from 'wouter'
import { formatearNumero } from '../../../utils/ViewsFormater'
import { useDispatch } from 'react-redux'
import { addSubscription } from '../../../store/reducers'

type Props = { channelId: string }

export const RedictLink = ({
  children,
  idRoute
}: {
  children: React.ReactNode
  idRoute: string
}) => <WouterLink href={`/channels/${idRoute}`}>{children}</WouterLink>

const ChannelCard = ({ item }: { item: ItemChannel }) => {
  const dispatch = useDispatch()

  const handleSetSubscription = () => {
    dispatch(
      addSubscription({
        imgUrl: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        channelId: item.id
      })
    )
  }

  return (
    <Stack
      key={item.id}
      bgColor="blackAlpha.100"
      borderRadius="xl"
      border="2px solid #555"
      p={4}
      gap={4}
      zIndex="skipLink"
    >
      <RedictLink idRoute={item.id}>
        <Heading cursor="pointer" _hover={{ color: '#fff' }} fontSize="xl">
          {item.snippet.title}
        </Heading>
      </RedictLink>
      <HStack>
        <RedictLink idRoute={item.id}>
          <Image
            cursor="pointer"
            src={item.snippet.thumbnails.default.url}
            alt={item.snippet.title}
            boxSize={item.snippet.thumbnails.default.width}
            borderRadius="xl"
            border="2px solid #555"
          />
        </RedictLink>
        <Stack
          flex={1}
          borderRadius="xl"
          bgColor="blackAlpha.200"
          border="2px solid #555"
          p={2}
          gap={1}
        >
          <Text fontWeight="bold">
            {formatearNumero(item.statistics.subscriberCount)} suscriptores
          </Text>
          <Divider orientation="vertical" />
          <Button
            borderRadius="xl"
            onClick={() => handleSetSubscription()}
            zIndex="overlay"
            px={2}
            py={1}
            _hover={{ color: 'white', bgColor: 'red.400' }}
          >
            Subscribe
          </Button>
        </Stack>
      </HStack>
    </Stack>
  )
}

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
        <ChannelCard key={item.id} item={item} />
      ))}
    </>
  )
}

export default ChannelDetails
