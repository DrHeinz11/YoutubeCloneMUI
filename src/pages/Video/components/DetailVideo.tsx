import { Button, Divider, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { AiOutlineLike, AiOutlineEye, AiOutlineDislike } from 'react-icons/ai'
import { formatearNumero } from '../../../utils/ViewsFormater'
import ChannelDetails from './ChannelDetails'
import CollapseDescription from './CollapseDescription'
import { SnippetVideoDetails, Statistics, ContentDetails } from '../../../types/typeAPI'
import { dateVideoFormater } from '../../../utils/dateVideoFormater'

interface Props {
  snippet: SnippetVideoDetails
  statistics: Statistics
  contentDetails: ContentDetails
  id: string
}

const DetailVideo = ({ snippet, statistics }: Props) => {
  const { title, description, tags, channelId, publishedAt } = snippet
  const { likeCount, viewCount } = statistics

  return (
    <HStack flexWrap="wrap" alignItems="flex-start" wrap={'wrap'}>
      <Stack
        bgColor="blackAlpha.100"
        borderRadius="0"
        border={'2px solid #555'}
        px={2}
        pt={2}
        pb={4}
        flex={'2 0 350px'}
      >
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="xl">{dateVideoFormater(publishedAt)}</Heading>
        <CollapseDescription description={description} tags={tags} />
      </Stack>

      <Stack justifyContent={'space-between'} flex={'1 0 300px'} height={'240px'}>
        {' '}
        <ChannelDetails channelId={channelId} />
        <HStack flex={1} gap={2} alignItems="stretch">
          <HStack
            maxH={'60px'}
            gap={1}
            spacing={0}
            bgColor="blackAlpha.100"
            borderRadius="0"
            border={'2px solid #555'}
            px={4}
            py={2}
          >
            <Button
              variant="topNavBar"
              flexDir="row"
              display="flex"
              gap={1}
              alignItems="center"
              _hover={{ bgColor: 'green.200' }}
            >
              <AiOutlineLike size="18px" />
              {formatearNumero(likeCount)}
            </Button>
            <Divider orientation="vertical" />
            <Button _hover={{ color: 'black', bgColor: 'red.400' }} variant="topNavBar">
              <AiOutlineDislike />
            </Button>
          </HStack>
          <HStack
            maxH={'60px'}
            gap={1}
            alignItems="center"
            bgColor="blackAlpha.100"
            borderRadius="0"
            border={'2px solid #555'}
            px={4}
            py={2}
            flex={1}
          >
            <AiOutlineEye size="18px" />
            <Text>{formatearNumero(viewCount)}</Text>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  )
}

export default DetailVideo
