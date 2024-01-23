import { Stack } from '@chakra-ui/react'
import HistoryCard from './HistoryCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { HistoryDetails } from '../../../types'

const HistoryContainer = () => {
  const sliceData = useSelector<RootState, HistoryDetails[] | []>((state) => state.HistorySlice)
  return (
    <Stack my={2} gap={2}>
      {sliceData?.map((element) => <HistoryCard {...element} />)}
    </Stack>
  )
}

export default HistoryContainer
