import { HStack, Heading, Image, Stack, Tag, Text } from '@chakra-ui/react'
import { Link as WouterLink } from 'wouter'
import { HistoryDetails } from '../../../types'
import { DateFormatHandler } from '../../../utils'

const HistoryCard = ({
  chanellName,
  idVideo,
  publishedAt,
  srcImage,
  srcImageAlt,
  titleName,
  videoDuration,
  channelId
}: HistoryDetails) => {
  return (
    <HStack
      as={WouterLink}
      href={`/video/${idVideo}`}
      _hover={{ boxShadow: '2xl', backgroundColor: '#1c1c1cbf', borderColor: '#fafafa' }}
      bgColor={'pallete.cardBackground'}
      gap={4}
      borderRadius={'lg'}
      border={'.5px solid #1a1a1a'}
      justifyContent={'center'}
      flexWrap={'wrap'}
      py={2}
      px={4}
    >
      <Image
        m={2}
        borderRadius={'md'}
        maxW={'250px'}
        src={srcImage}
        alt={srcImageAlt}
        loading="lazy"
      />
      <Stack flex={1} minW={'250px'}>
        <Heading flex={1} color={'gray.300'} fontSize={'xl'}>
          {titleName}
        </Heading>
        {videoDuration && <Tag>{videoDuration}</Tag>}
        <WouterLink href={`/channels/${channelId}`}>
          <Text w={'fit-content'} _hover={{ color: 'gray.300' }} color={'gray.500'} fontSize={'lg'}>
            {chanellName}
          </Text>{' '}
        </WouterLink>
        {publishedAt && <Text>{DateFormatHandler(publishedAt)}</Text>}
      </Stack>
    </HStack>
  )
}

export default HistoryCard
