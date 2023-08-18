import { Container, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useGetSearchVideosQuery } from '../../store/reducers/apiFetch'
import { HandleScrollToTop } from '../../utils'
import { IsError, Loader } from '../../components'
import { Card, HeaderPublicity } from './components'
import { Item } from '../../types/typeAPI'
import { RootState } from '../../store'

const HomeContainer = () => {
  const state = useSelector((store: RootState) => store.searchReducer)
  const { data, isLoading, isError } = useGetSearchVideosQuery(state)

  useEffect(() => {
    HandleScrollToTop({ direction: 'top', coordinate: 0, behavior: 'smooth' })
  }, [state])

  if (isLoading) return <Loader />
  if (isError) return <IsError error={isError} />
  return (
    <Container p={0} variant="section">
      <HeaderPublicity />
      <SimpleGrid minChildWidth="300px" justifyItems="center" spacing={0} gap={4}>
        {data?.items
          .filter((item: Item) => item.id.kind !== 'youtube#channel')
          .map((item: Item) => (
            <Card
              key={item.id.videoId}
              srcImage={item.snippet.thumbnails.medium.url}
              srcChanell=""
              srcImageAlt={item.snippet.title}
              srcChanellAlt={item.snippet.channelTitle}
              titleName={item.snippet.title}
              chanellName={item.snippet.channelTitle}
              viewsVideos=""
              videoDuration=""
              idVideo={item.id.videoId}
              dateVideos=""
            />
          ))}
      </SimpleGrid>
    </Container>
  )
}

export default HomeContainer
