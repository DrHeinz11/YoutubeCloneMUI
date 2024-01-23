import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryDetails } from '../../types'

const initialState: HistoryDetails[] = []

// Crear el slice
export const HistorySlice = createSlice({
  name: 'HistorySlice',
  initialState,
  reducers: {
    addVideoToHistoryList: (state, action: PayloadAction<HistoryDetails>) => {
      // Modificar el estado directamente para agregar un nuevo like
      state.length === 0 && state.push(action.payload)

      const callback = (currentElement: HistoryDetails) =>
        currentElement.idVideo === action.payload.idVideo

      !state?.some(callback) && state.push(action.payload)
      // state = [action.payload,...state]
    }
  }
})

// Exportar las acciones generadas por el slice
export const { addVideoToHistoryList } = HistorySlice.actions
