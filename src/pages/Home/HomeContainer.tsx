import { Item } from '../../types/typeAPI'
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderPublicity, Card } from '..'
import { Loader, IsError } from '../../components'
import { RootState } from '../../store'
import {
  addToFavouriteList,
  addVideoToHistoryList,
  useGetSearchVideosQuery
} from '../../store/reducers'
import { HandleScrollToTop } from '../../utils'
import ChannelCard from './components/ChannelCard'
import { DataType, SearchResponseType, Thumbnail } from '../../types/SearchType'
import { daysAgo } from '../../utils/dayAgo'
import { formatNumber } from '../../utils/formatNumber'
import { Link as WouterLink } from 'wouter'
import { FavouriteDetails, HistoryDetailsTest } from '../../types'
const ENV: string = import.meta.env.VITE_ENV

const HomeContainer = () => {
  const state = useSelector((store: RootState) => store.SearchReducer)
  const { data, isLoading, isError } = useGetSearchVideosQuery(state)
  const dispatch = useDispatch()
  const handleSetPersistData = useCallback(
    ({
      videoId,
      thumbnail,
      channelHandle,
      channelId,
      channelThumbnail,
      title,
      viewCount,
      publishDate,
      publishedTimeText,
      publishedAt
    }: HistoryDetailsTest) => {
      dispatch(
        addVideoToHistoryList({
          videoId,
          thumbnail,
          channelHandle,
          channelId,
          channelThumbnail,
          title,
          viewCount,
          publishDate,
          publishedTimeText,
          publishedAt
        })
      )
    },
    [dispatch]
  )
  const handleLikedVideos = useCallback(
    ({
      videoId,
      thumbnail,
      channelHandle,
      channelId,
      channelThumbnail,
      title,
      viewCount,
      publishDate,
      publishedTimeText,
      publishedAt,
      isLiked
    }: FavouriteDetails) => {
      dispatch(
        addToFavouriteList({
          videoId,
          thumbnail,
          channelHandle,
          channelId,
          channelThumbnail,
          title,
          viewCount,
          publishDate,
          publishedTimeText,
          publishedAt,
          isLiked
        })
      )
    },
    [dispatch]
  )
  
  useEffect(() => {
    HandleScrollToTop({ direction: 'top', behavior: '', coordinate: 0 })
  }, [state])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <IsError error={isError} />
  }

  const renderItem = (item: Item) => {
    if (item.id.kind === 'youtube#channel') {
      return (
        <ChannelCard
          key={item.id.channelId}
          srcImage={item.snippet.thumbnails.medium.url}
          titleName={item.snippet.title}
          channelId={item.id.channelId}
        />
      )
    }
    return (
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
  }

  const renderDevItem = (itemVideo: DataType) => {
    if (
      itemVideo.type === SearchResponseType.Channel ||
      itemVideo.type === SearchResponseType.ShortsListing
    ) {
      return null
    }
    return (
      <Stack key={itemVideo.videoId} spacing={0} gap={4} maxW={'375px'}>
        {itemVideo.thumbnail &&
          [itemVideo.thumbnail[0]].map((thumbnail: Thumbnail) => (
            <Image
              key={thumbnail.url}
              src={thumbnail.url}
              w={'full'}
              maxW={'375px'}
              h={'215px'}
              borderRadius={'lg'}
              boxShadow="dark-lg"
              objectFit={'cover'}
            />
          ))}
        <HStack gap={4} spacing={0}>
          <Box boxSize={'38px'} flex={'0 0 38px'}>
            <WouterLink href={`/channels/${itemVideo.channelHandle ?? itemVideo.channelId}`}>
              {itemVideo.channelThumbnail &&
                itemVideo.channelThumbnail.map((item) => (
                  <Image
                    key={item.url}
                    boxShadow="dark-lg"
                    borderRadius={'full'}
                    src={item.url}
                    boxSize={'full'}
                  />
                ))}
            </WouterLink>{' '}
          </Box>
          <Stack>
            <Heading color={'text.primary'} fontSize={'16px'}>
              {itemVideo.title}
            </Heading>
            <HStack fontSize={'14px'}>
              {itemVideo.viewCount && (
                <Text color={'text.secondary'}>{formatNumber(itemVideo.viewCount)} views</Text>
              )}
              {itemVideo.publishDate && (
                <>
                  <Text as={'span'}>•</Text>
                  <Text color={'text.tertiary'}>
                    {itemVideo.publishedTimeText ?? daysAgo(itemVideo.publishedAt ?? '')}
                  </Text>
                </>
              )}
            </HStack>
          </Stack>
        </HStack>
        <Button
          colorScheme="red"
          onClick={() =>
            handleSetPersistData({
              videoId: itemVideo.videoId,
              thumbnail: itemVideo.thumbnail && itemVideo.thumbnail[0].url,
              channelHandle: itemVideo.channelHandle,
              channelId: itemVideo.channelId,
              channelThumbnail: itemVideo.channelThumbnail && itemVideo.channelThumbnail[0].url,
              title: itemVideo.title,
              viewCount: itemVideo.videoCount,
              publishDate: itemVideo.publishDate,
              publishedTimeText: itemVideo.publishedTimeText,
              publishedAt: itemVideo.publishedAt
            })
          }
        >
          Pruba
        </Button>
        <Button
          colorScheme="red"
          onClick={() =>
            handleLikedVideos({
              videoId: itemVideo.videoId,
              thumbnail: itemVideo.thumbnail && itemVideo.thumbnail[0].url,
              channelHandle: itemVideo.channelHandle,
              channelId: itemVideo.channelId,
              channelThumbnail: itemVideo.channelThumbnail && itemVideo.channelThumbnail[0].url,
              title: itemVideo.title,
              viewCount: itemVideo.videoCount,
              publishDate: itemVideo.publishDate,
              publishedTimeText: itemVideo.publishedTimeText,
              publishedAt: itemVideo.publishedAt,
              isLiked: true
            })
          }
        >
          liked
        </Button>
      </Stack>
    )
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
        {ENV === 'PRODUCTION' ? data?.items.map(renderItem) : data?.data.map(renderDevItem)}
      </SimpleGrid>
    </Container>
  )
}

export default HomeContainer
