import { Item } from '../../types/typeAPI'

import {
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HeaderPublicity, Card } from '..'
import { Loader, IsError } from '../../components'
import { RootState } from '../../store'
import { useGetSearchVideosQuery } from '../../store/reducers'
import { HandleScrollToTop } from '../../utils'
import ChannelCard from './components/ChannelCard'
import { DataType, SearchResponseType, Thumbnail } from '../../types/SearchType'
import { daysAgo } from '../../utils/dayAgo'
import { formatNumber } from '../../utils/formatNumber'
const ENV: string = import.meta.env.VITE_ENV
const HomeContainer = () => {
  const state = useSelector((store: RootState) => store.SearchReducer)
  const { data, isLoading, isError } = useGetSearchVideosQuery(state)
  console.log(ENV)
  useEffect(() => {
    HandleScrollToTop({ direction: 'top', behavior: '', coordinate: 0 })
  }, [state])
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <IsError error={isError} />
  }
  return (
    <Container
      p={0}
      maxW={'2000px'}
      variant="section"
      as={'section'}
      px={[1, 2]}
      pb={2}
      m={'0'}
      mt={[0, 8]}
    >
      <HeaderPublicity />
      <SimpleGrid minChildWidth="325px" justifyItems="center" spacing={0} gap={4}>
        {ENV === 'PRODUCTION' ? (
          <>
            {' '}
            {data?.items.map((item: Item) =>
              item.id.kind === 'youtube#channel' ? (
                <ChannelCard
                  key={item.id.channelId}
                  srcImage={item.snippet.thumbnails.medium.url}
                  titleName={item.snippet.title}
                  channelId={item.id.channelId}
                />
              ) : (
                <Card
                  srcChanell=""
                  key={item.id.videoId}
                  liveBroadcastContent={item.snippet.liveBroadcastContent}
                  srcImage={item.snippet.thumbnails.medium.url}
                  srcImageAlt={item.snippet.title}
                  srcChanellAlt={item.snippet.channelTitle}
                  titleName={item.snippet.title}
                  chanellName={item.snippet.channelTitle}
                  channelId={item.snippet.channelId}
                  idVideo={item.id.videoId}
                  viewsVideos=""
                  videoDuration=""
                  dateVideos=""
                  publishedAt={item.snippet.publishedAt}
                />
              )
            )}
          </>
        ) : (
          <>
            {' '}
            {data?.data.map(
              (itemVideo: DataType) =>
                itemVideo.type !== SearchResponseType.Channel &&
                itemVideo.type !== SearchResponseType.ShortsListing && (
                  <>
                    <Stack key={itemVideo.videoId} spacing={0} gap={4}>
                      {itemVideo.thumbnail &&
                        [itemVideo.thumbnail[0]].map((thumnail: Thumbnail) => (
                          <>
                            <Image
                              src={thumnail.url}
                              w={'full'}
                              maxW={'375px'}
                              h={'215px'}
                              borderRadius={'lg'}
                              boxShadow="dark-lg"
                              objectFit={'cover'}
                            />
                          </>
                        ))}

                      <HStack gap={4} spacing={0}>
                        {itemVideo.channelThumbnail &&
                          [itemVideo.channelThumbnail[0]].map((item) => (
                            <>
                              <Image
                                boxShadow="dark-lg"
                                borderRadius={'full'}
                                src={item.url}
                                boxSize={'38px'}
                              />
                            </>
                          ))}
                        <Stack>
                          <Heading color={'#fff'} fontSize={'16px'}>
                            {itemVideo.title}
                          </Heading>
                          <HStack fontSize={'14px'}>
                            {itemVideo.viewCount && (
                              <Text color={'#d8d8d8'}>
                                {formatNumber(itemVideo.viewCount ? itemVideo.viewCount : '')}{' '}
                                vistas
                              </Text>
                            )}
                            {itemVideo.publishDate && (
                              <>
                                {' '}
                                <Text as={'span'}>•</Text>
                                <Text color={'palette.grayText'}>
                                  {daysAgo(itemVideo.publishedAt ? itemVideo.publishedAt : '')}
                                </Text>
                              </>
                            )}
                          </HStack>
                        </Stack>
                      </HStack>
                    </Stack>
                  </>
                )
            )}
          </>
        )}
      </SimpleGrid>
    </Container>
  )
}

export default HomeContainer
