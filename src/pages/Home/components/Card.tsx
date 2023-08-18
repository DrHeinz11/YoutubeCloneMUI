import { Box, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { CardDetails } from '../../../types'
import { Link as WouterLink } from 'wouter'

const Card = ({
  srcChanell,
  chanellName,
  dateVideos,
  srcChanellAlt,
  srcImage,
  srcImageAlt,
  titleName,
  viewsVideos,
  videoDuration,
  idVideo
}: CardDetails) => {
  return (
    <Stack
      as={WouterLink}
      href={`/video/${idVideo}`}
      spacing={0}
      gap={4}
      p={4}
      bgColor={'#fff'}
      boxShadow={'xl'}
      // borderRadius={'2xl'}
      border={'2px solid #555'}
      _hover={{ boxShadow: 'dark-lg' }}
      minH={'355px'}
      maxW={'355px'}
    >
      <Box position={'relative'} maxW={'320px'}>
        <Image
          src={srcImage}
          alt={srcImageAlt}
          aspectRatio={'16/9'}
          borderRadius={'xl'}
          w={'full'}
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
        <Heading fontSize={'lg'}>{titleName}</Heading>
        <Text color={'gray.700'} fontSize={'lg'}>
          {chanellName}
        </Text>
        <HStack spacing={0} gap={1} color={'gray.700'}>
          <Text>{viewsVideos} views</Text>
          <>●</>
          <Text>{dateVideos}</Text>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default Card
