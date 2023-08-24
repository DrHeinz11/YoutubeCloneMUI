import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CardDetails } from '../types'
import { Link as WouterLink } from 'wouter'

const Card = ({
  srcChanell,
  chanellName,
  srcChanellAlt,
  srcImage,
  srcImageAlt,
  titleName,
  videoDuration,
  idVideo,
  channelId
}: CardDetails) => {
  return (
    <Stack
      as={WouterLink}
      href={`/video/${idVideo}`}
      spacing={0}
      gap={4}
      className="card"
      p="20px"
      minH={'355px'}
      maxW={'355px'}
      _hover={{ boxShadow: '2xl', backgroundColor: '#1c1c1cbf' }}
    >
      <Box position={'relative'} maxW={'320px'}>
        <Image
          src={srcImage}
          alt={srcImageAlt}
          aspectRatio={'16/9'}
          borderRadius={'xl'}
          w={'full'}
          loading="lazy"
        />
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
      <Stack spacing={0} gap={2} p={2}>
        <Heading color={'gray.300'} fontSize={'lg'}>
          {titleName}
        </Heading>
        <WouterLink href={`/channels/${channelId}`}>
          <Text color={'gray.500'} fontSize={'lg'}>
            {chanellName}
          </Text>
        </WouterLink>
      </Stack>
    </Stack>
  )
}

export default Card
