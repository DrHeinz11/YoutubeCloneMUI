import { Stack, HStack, Heading, Button, Image, Box, Text } from '@chakra-ui/react'
import { DataType, SearchResponseType, Thumbnail } from '../../types/SearchType'
import { daysAgo } from '../../utils/dayAgo'
import { formatNumber } from '../../utils/formatNumber'
import { Link as WouterLink } from 'wouter'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { HistoryDetailsTest, PreferencesItem } from '../../types'
import { addVideoToHistoryList, addToFavouriteList } from '../../store/reducers'
import {
  PreferencesItemID,
  addSeeLaterItem,
  removeSeeLaterItem
} from '../../store/reducers/seeLaterSlice'

const CardRework = (itemVideo: DataType) => {
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
    }: PreferencesItem) => {
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
  const handleSeeLaterVideos = useCallback(
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
    }: PreferencesItem) => {
      dispatch(
        addSeeLaterItem({
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
  const handleRemoveSeeLaterVideos = useCallback(
    ({ videoId, channelId }: PreferencesItemID) => {
      dispatch(
        removeSeeLaterItem({
          videoId,
          channelId
        })
      )
    },
    [dispatch]
  )
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
      <Button
        colorScheme="red"
        onClick={() =>
          handleSeeLaterVideos({
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
        See Later
      </Button>
      <Button
        colorScheme="red"
        onClick={() =>
          handleRemoveSeeLaterVideos({
            videoId: itemVideo.videoId,
            channelId: itemVideo.channelId
          })
        }
      >
        Remove See later
      </Button>
    </Stack>
  )
}

export default CardRework
