import { Stack, HStack, Heading } from '@chakra-ui/react'
import { MdSubscriptions } from 'react-icons/md'
import SubscriptionName from './SubscriptionName'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { SubscriptionType } from '../../../types'

const SubscriptionContainer = () => {
  const SubscriptionData = useSelector<RootState, SubscriptionType[]>(
    (store) => store.SubscriptionSlice
  )
  return (
    <Stack>
      <HStack gap={2} py={2} w={'fit-content'} align="center" justify="flex-start">
        <MdSubscriptions size={'20px'} />
        <Heading textTransform="capitalize" fontWeight="medium" fontSize="lg">
          Subscriptions
        </Heading>
      </HStack>
      {SubscriptionData?.map((element) => <SubscriptionName {...element} />)}
    </Stack>
  )
}

export default SubscriptionContainer
