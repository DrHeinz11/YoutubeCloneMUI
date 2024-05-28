import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CardDetails } from '../../types'
import { Link as WouterLink } from 'wouter'
import { LiveTag } from '..'
import DateFormaterHandler from '../../utils/DateFormatHandler'
import { useDispatch } from 'react-redux'
import { addVideoToHistoryList } from '../../store/reducers'
import { useCallback } from 'react'

const Card = ({
  srcChanell,
  srcChanellAlt,
  chanellName,
  srcImage,
  srcImageAlt,
  titleName,
  videoDuration,
  publishedAt,
  idVideo,
  liveBroadcastContent,
  channelId
}: CardDetails) => {
  const dispatch = useDispatch()

  const handleSetHistory = useCallback(() => {
    dispatch(
      addVideoToHistoryList({
        srcImage,
        srcImageAlt,
        titleName,
        chanellName,
        idVideo,
        publishedAt,
        videoDuration,
        channelId
      })
    )
  }, [
    dispatch,
    srcImage,
    srcImageAlt,
    titleName,
    chanellName,
    idVideo,
    publishedAt,
    videoDuration,
    channelId
  ])

  return (
    <Stack
      as={WouterLink}
      href={`/video/${idVideo}`}
      _hover={{ boxShadow: '2xl', backgroundColor: '#1c1c1cbf' }}
      bgColor={'pallete.cardBackground'}
      gap={4}
      spacing={0}
      className="card"
      p="20px"
      flex={1}
      minH={'355px'}
      maxW={'355px'}
      w={'full'}
      justifyContent={'space-between'}
      onClick={handleSetHistory}
    >
      <Box position={'relative'} maxW={'300px'}>
        <Image
          src={srcImage}
          alt={srcImageAlt}
          boxSize={'150px'}
          borderRadius={'xl'}
          w={'full'}
          objectFit={'cover'}
          loading="lazy"
        />
        {liveBroadcastContent === 'live' && (
          <LiveTag position={'absolute'} bottom={2} right={'10px'} />
        )}
        {srcChanell && (
          <Image
            src={srcChanell}
            alt={srcChanellAlt}
            position={'absolute'}
            bottom={'-15px'}
            left={4}
            border={'1px'}
            borderColor={'white'}
            boxShadow={'xl'}
            borderRadius={'xl'}
            boxSize={'48px'}
          />
        )}
        {videoDuration && (
          <Text
            position={'absolute'}
            right={6}
            bottom={2}
            px={4}
            py={0.5}
            bgColor={'blackAlpha.800'}
            color={'white'}
            borderRadius={'full'}
          >
            {videoDuration}
          </Text>
        )}
      </Box>
      <Stack spacing={0} maxW={'full'} gap={2}>
        <Heading flex={1} color={'gray.300'} fontSize={'lg'}>
          {titleName}
        </Heading>{' '}
        <WouterLink href={`/channels/${channelId}`}>
          <Text w={'fit-content'} _hover={{ color: 'gray.300' }} color={'gray.500'} fontSize={'lg'}>
            {chanellName}
          </Text>
        </WouterLink>
        {publishedAt && (
          <Text w={'fit-content'} fontWeight={'thin'} color={'gray.300'} fontSize={'sm'}>
            {DateFormaterHandler(publishedAt)}
          </Text>
        )}{' '}
      </Stack>{' '}
    </Stack>
  )
}

export default Card
