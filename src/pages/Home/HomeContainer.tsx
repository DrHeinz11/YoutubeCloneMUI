import { Item } from '../../types/typeAPI'
import { Container, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { HeaderPublicity, Card } from '..'
import { Loader, IsError } from '../../components'
import { RootState } from '../../store'
import { useGetSearchVideosQuery } from '../../store/reducers'
import { HandleScrollToTop } from '../../utils'
import ChannelCard from './components/ChannelCard'
import CardRework from '../../components/CardRework/CardRework'
import { DataType } from '../../types/SearchType'
const ENV: string = import.meta.env.VITE_ENV

const HomeContainer = () => {
  const state = useSelector((store: RootState) => store.SearchReducer)
  const { data, isLoading, isError } = useGetSearchVideosQuery(state)

  useEffect(() => {
    HandleScrollToTop({ direction: 'top', behavior: '', coordinate: 0 })
  }, [state])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <IsError error={isError} />
  }

  const RenderItem = (item: Item) => {
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
        srcImage={item.snippet.thumbnails.high.url ?? item.snippet.thumbnails.medium.url}
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
        {ENV === 'PRODUCTION'
          ? data?.items.map((item: Item) => (
              <RenderItem key={item.id.videoId ?? item.snippet.channelId} {...item} />
            ))
          : data?.data.map((element: DataType) => (
              <CardRework key={element.videoId} {...element} />
            ))}
      </SimpleGrid>
    </Container>
  )
}

export default HomeContainer
