import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CardDetails } from '../types'
import { Link as WouterLink } from 'wouter'
import { LiveTag } from '.'
import DateFormaterHandler from '../utils/DateFormatHandler'

const Card = ({
  srcChanell,
  chanellName,
  srcChanellAlt,
  srcImage,
  srcImageAlt,
  titleName,
  videoDuration,
  publishedAt,
  idVideo,
  liveBroadcastContent,
  channelId
}: CardDetails) => {
  return (
    <Stack
      as={WouterLink}
      href={`/video/${idVideo}`}
      spacing={0}
      gap={4}
      className="card"
      bgColor={'pallete.cardBackground'}
      p="20px"
      flex={1}
      minH={'355px'}
      maxW={'355px'}
      w={'full'}
      justifyContent={'space-between'}
      _hover={{ boxShadow: '2xl', backgroundColor: '#1c1c1cbf' }}
    >
      <Box position={'relative'} maxW={'300px'}>
        <Image
          src={srcImage}
          alt={srcImageAlt}
          boxSize={'150px'}
          borderRadius={'xl'}
          w={'full'}
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
      )}  </Stack>{' '}
    </Stack>
  )
}

export default Card
