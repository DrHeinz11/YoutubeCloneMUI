import { Box, Center, Heading, Image, Stack } from '@chakra-ui/react'
import { CardDetails } from '../types'
import { RedictLink } from '../pages/Video/components/ChannelDetails'

const ChannelCard = ({
  srcImage,
  titleName,
  channelId
}: Pick<CardDetails, 'srcImage' | 'titleName' | 'channelId'>) => {
  return (
    <RedictLink idRoute={channelId ?? ''}>
      <Center
        cursor={'pointer'}
        flexDir={'column'}
        gap={4}
        bgColor={'gray.700'}
        p="20px"
        flex={1}
        minH={'355px'}
        maxW={'355px'}
        w={'full'}
        borderRadius={'xl'}
        _hover={{ boxShadow: '2xl', backgroundColor: 'gray.900' }}
      >
        <Box position={'relative'} boxSize={'150px'}>
          <Image src={srcImage} alt={titleName} borderRadius={'xl'} w={'full'} loading="lazy" />
        </Box>

        <Stack spacing={0} maxW={'275px'} gap={2} p={2}>
          <Heading flex={1} color={'gray.300'} fontSize={'lg'}>
            {titleName}
          </Heading>
        </Stack>
      </Center>
    </RedictLink>
  )
}

export default ChannelCard
