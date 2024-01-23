import { Stack } from '@chakra-ui/react'
import HistoryCard from './HistoryCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { HistoryDetails } from '../../types'

const HistoryContainer = () => {
  const datas: HistoryDetails[] | [] = useSelector<RootState>((state) => state.HistorySlice)
  return (
    <Stack my={2} gap={2}>
      {datas?.map((element) => <HistoryCard {...element} />)}
    </Stack>
  )
}

export default HistoryContainer
