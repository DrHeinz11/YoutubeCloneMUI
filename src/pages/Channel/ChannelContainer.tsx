import { Container, Divider, SimpleGrid, Stack } from '@chakra-ui/react'
import ChannelDetails from './components/ChannelDetails'
import { useGetDetailChannelVideosQuery } from '../../store/reducers/apiFetch'
import { IsError, Loader } from '../../components'
import { Card } from '..'
interface paramsProps {
  params: { id: string }
}
const ChannelContainer = ({ params }: paramsProps) => {
  const {
    data: detailChannelVideos,
    isLoading,
    isError,
    error
  } = useGetDetailChannelVideosQuery({
    channelId: params.id,
    part: 'snippet,id',
    order: 'date'
  })
  isLoading && <Loader />
  isError && <IsError error={error} />
  !detailChannelVideos?.pageInfo.totalResults && <IsError error={error} />
  return (
    <>
      <Container p={0} variant="section">
        {' '}
        <Stack spacing={0} gap={4}>
          <ChannelDetails channelId={params.id} />
          <Divider />{' '}
          <SimpleGrid minChildWidth="300px" justifyItems="center" spacing={0} gap={4}>
            {detailChannelVideos?.items.map((item) => (
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
            ))}{' '}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export default ChannelContainer
