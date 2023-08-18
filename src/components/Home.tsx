import { Center, Heading, SimpleGrid, Spinner } from '@chakra-ui/react'
import Card from '../pages/Home/components/Card'
import { useGetSearchVideosQuery } from '../store/reducers/apiFetch'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { HandleScrollToTop } from '../utils'
import { Item } from '../types/typeAPI'
import { RootState } from '../store'

const Home = () => {
  const state = useSelector((store: RootState) => store.searchReducer)
  const { data, isLoading, isError } = useGetSearchVideosQuery(state)
  useEffect(() => {
    HandleScrollToTop({ direction: 'top', coordinate: 0, behavior: 'smooth' })
  }, [state])

  if (isLoading)
    return (
      <Center boxSize={'full'}>
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="red.500" size="xl" />{' '}
      </Center>
    )
  if (isError) return <Heading>Is error : {isError}</Heading>
  console.log(data)
  return (
    <SimpleGrid minChildWidth={'300px'} justifyItems={'center'} spacing={0} gap={4}>
      {data?.items.map((item: Item) => {
        if (item.id.kind !== 'youtube#channel')
          return (
            <Card
              key={item.id.videoId}
              srcImage={item.snippet.thumbnails.medium.url}
              srcChanell={''}
              srcImageAlt={item.snippet.title}
              srcChanellAlt={item.snippet.channelTitle}
              titleName={item.snippet.title}
              chanellName={item.snippet.channelTitle}
              viewsVideos={''}
              videoDuration={''}
              idVideo={item.id.videoId}
              dateVideos={''}
            />
          )
      })}
    </SimpleGrid>
  )
}

export default Home
