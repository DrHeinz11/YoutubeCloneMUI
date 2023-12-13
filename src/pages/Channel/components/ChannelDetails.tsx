import { AspectRatio, Box, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { useGetDetailChannelQuery } from '../../../store/reducers/apiFetch'
import { Snippet, Statistics } from './responseRaw'
import { IsError, Loader } from '../../../components'

export interface IChannelDetailProps {
  avatarImage?: boolean
}

const ChannelBanner = ({
  bannerUrl,
  channelTitle
}: {
  bannerUrl: string
  channelTitle: string
}) => (
  <AspectRatio height="250px" ratio={16 / 9}>
    <Image src={bannerUrl} alt={channelTitle} aria-label={channelTitle} />
  </AspectRatio>
)

const ChannelAvatar = ({
  avatarUrl,
  snippetTitle
}: {
  avatarUrl: string
  snippetTitle: string
}) => (
  <Box bg="#d9d9d9" border="2px solid #555555" flexShrink="0" w="88px" h="88px" position="relative">
    <Image src={avatarUrl} alt={snippetTitle} aria-label={snippetTitle} />
  </Box>
)

const ChannelInfo = ({ snippet, statistics }: { snippet: Snippet; statistics: Statistics }) => (
  <Box
    display="flex"
    flexDirection="column"
    gap="0"
    alignItems="start"
    justifyContent="center"
    position="relative"
  >
    <Text fontSize="2xl" color="#000000" display="flex" alignItems="center">
      {snippet.title}
    </Text>
    <Stack
      display="flex"
      flexDirection="row"
      gap="0"
      alignItems="start"
      justifyContent="start"
      flexWrap="wrap"
      alignSelf="flex-start"
      flexShrink="0"
      position="relative"
    >
      <Text fontSize="medium" color="#111111" display="block">
        {snippet.customUrl}
      </Text>
      <HStack
        display="flex"
        flexDirection="row"
        gap="1"
        alignItems="center"
        justifyContent="start"
        flexShrink="0"
        position="relative"
      >
        <Text fontSize="light" color="#1a1a1a" display="block">
          {statistics.subscriberCount}
        </Text>
        <Text fontSize="light" color="#1a1a1a" display="block">
          {statistics.videoCount}
        </Text>
      </HStack>
    </Stack>
  </Box>
)

const ChannelDetails = ({ channelId }: { channelId: string }): JSX.Element => {
  const { data: useQueryStateResult, isLoading, isError } = useGetDetailChannelQuery({ channelId })
  if (isLoading) return <Loader />
  if (isError) return <IsError error={isError} />
  return (
    <>
      {useQueryStateResult?.items?.map(({ brandingSettings, id, snippet, statistics }) => (
        <Stack key={id} as="section">
          {brandingSettings.image.bannerExternalUrl && (
            <ChannelBanner
              bannerUrl={brandingSettings.image.bannerExternalUrl}
              channelTitle={brandingSettings.channel.title}
            />
          )}

          <Box
            rounded="lg"
            p="2.5"
            display="flex"
            flexDirection="row"
            gap="15px"
            alignItems="center"
            justifyContent="start"
            w="390px"
            position="relative"
          >
            <ChannelAvatar
              avatarUrl={snippet.thumbnails.medium.url || snippet.thumbnails.high.url}
              snippetTitle={snippet.title}
            />
            <ChannelInfo snippet={snippet} statistics={statistics} />
          </Box>
        </Stack>
      ))}
    </>
  )
}

export default ChannelDetails
