import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryDetails, HistoryDetailsTest } from '../../types'

const initialState: HistoryDetailsTest[] = []
const ENV: string = import.meta.env.VITE_ENV
const isProduction = ENV === 'PRODUCTION'
// Crear el slice

const Reducer = {
  addVideoToHistoryList: (state: HistoryDetails[], action: PayloadAction<HistoryDetails>) => {
    // Modificar el estado directamente para agregar un nuevo like
    state.length === 0 && state.push(action.payload)

    const callback = (currentElement: HistoryDetails) =>
      currentElement.idVideo === action.payload.idVideo

    !state?.some(callback) && state.push(action.payload)
    // state = [action.payload,...state]
  },
  addVideoToHistoryListDev: (
    state: HistoryDetailsTest[],
    action: PayloadAction<HistoryDetailsTest>
  ) => {
    // Modificar el estado directamente para agregar un nuevo like
    state.length === 0 && state.push(action.payload)

    const callback = (currentElement: HistoryDetailsTest) =>
      currentElement.videoId === action.payload.videoId

    !state?.some(callback) && state.push(action.payload)
    // state = [action.payload,...state]
  }
}

const addVideoToHistoryListFn = (
  state: HistoryDetailsTest[] | HistoryDetails[],
  action: { payload: HistoryDetailsTest | HistoryDetails; type: string }
) => {
  if (isProduction) {
    const stateAsHistoryDetails = state as HistoryDetails[]
    const actionData = action as PayloadAction<HistoryDetails>
    Reducer.addVideoToHistoryList(stateAsHistoryDetails, actionData)
  } else {
    const stateAsHistoryDetailsTest = state as HistoryDetailsTest[]
    const actionData = action as PayloadAction<HistoryDetailsTest>
    Reducer.addVideoToHistoryListDev(stateAsHistoryDetailsTest, actionData)
  }
}

export const HistorySlice = createSlice({
  name: 'HistorySlice',
  initialState,
  reducers: {
    addVideoToHistoryList: addVideoToHistoryListFn
  }
})

// Exportar las acciones generadas por el slice
export const { addVideoToHistoryList } = HistorySlice.actions
