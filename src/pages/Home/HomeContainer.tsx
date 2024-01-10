import { Container, SimpleGrid } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useGetSearchVideosQuery } from '../../store/reducers/apiFetch'
import { IsError, Loader } from '../../components'
import { Card, HeaderPublicity } from './components'
import { Item } from '../../types/typeAPI'
import { RootState } from '../../store'
import { useEffect } from 'react'
import { HandleScrollToTop } from '../../utils'

const HomeContainer = () => {
  const state = useSelector((store: RootState) => store.searchReducer)
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

  return (
    <Container p={0} maxW={'2000px'} variant="section" as={'section'} px={[1,2]} pb={2} m={'0'} mt={[0,8]}>
      <HeaderPublicity />
      <SimpleGrid minChildWidth="300px" justifyItems="center" spacing={0} gap={2}>
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
              channelId={item.snippet.channelId}
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
