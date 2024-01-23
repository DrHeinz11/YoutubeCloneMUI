import { HStack, Avatar, Text } from '@chakra-ui/react'
import { Link as WouterLink } from 'wouter'
import { SubscriptionType } from '../../../types'

const SubscriptionName = ({ channelId, imgUrl, title }: SubscriptionType) => {
  return (
    <WouterLink href={`/channels/${channelId}`}>
      <HStack cursor={'pointer'} ml={2} gap={2}>
        {' '}
        <Avatar
          borderRadius={'md'}
          size={'xs'}
          name={title}
          src={imgUrl ? imgUrl : 'https://bit.ly/broken-link'}
        />
        <Text>{title}</Text>
      </HStack>
    </WouterLink>
  )
}

export default SubscriptionName
