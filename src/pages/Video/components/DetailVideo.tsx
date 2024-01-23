import { Button, Divider, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { AiOutlineLike, AiOutlineEye, AiOutlineDislike } from 'react-icons/ai'
import { formatearNumero } from '../../../utils/ViewsFormater'
import ChannelDetails from './ChannelDetails'
import CollapseDescription from './CollapseDescription'
import { SnippetVideoDetails, Statistics, ContentDetails } from '../../../types/typeAPI'
import { BiDownload } from 'react-icons/bi'
import DateFormaterHandler from '../../../utils/DateFormatHandler'

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
    <HStack
      flexWrap="wrap"
      borderRadius="xl"
      bgColor={'#292929'}
      alignItems="flex-start"
      wrap={'wrap'}
      p={[1, 2, 3, 4]}
    >
      <Stack
        bgColor="blackAlpha.500"
        borderRadius="xl"
        border={'2px solid #555'}
        px={2}
        pt={2}
        pb={4}
        flex={'2 0 350px'}
      >
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="lg">{DateFormaterHandler(publishedAt)}</Heading>
        {description && <CollapseDescription description={description} tags={tags} />}
      </Stack>

      <Stack justifyContent={'space-between'} flex={'1 0 300px'} height={'240px'}>
        {' '}
        <ChannelDetails channelId={channelId} />
        <HStack flex={1} gap={2} alignItems="stretch">
          <HStack
            maxH={'60px'}
            gap={1}
            spacing={0}
            bgColor="blackAlpha.400"
            borderRadius="xl"
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
              _hover={{ bgColor: 'green.200', color: 'black' }}
              px={2}
              py={1}
            >
              <AiOutlineLike size="18px" />
              {formatearNumero(likeCount)}
            </Button>
            <Divider orientation="vertical" />
            <Button
              px={2}
              py={1}
              _hover={{ color: 'black', bgColor: 'red.400' }}
              variant="topNavBar"
            >
              <AiOutlineDislike />
            </Button>
          </HStack>
          <HStack
            maxH={'60px'}
            gap={4}
            alignItems="center"
            justifyContent={'space-around'}
            bgColor="blackAlpha.400"
            borderRadius="xl"
            border={'2px solid #555'}
            px={4}
            py={2}
            flex={1}
          >
            <HStack>
              <AiOutlineEye size="18px" />
              <Text>{formatearNumero(viewCount)}</Text>
            </HStack>
            <Button type="button" title="Download in MP3" colorScheme="gray">
              <BiDownload />
            </Button>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  )
}

export default DetailVideo
