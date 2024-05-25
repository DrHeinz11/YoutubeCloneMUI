import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PreferencesItem } from '../../types'

export type PreferencesItemID = Pick<PreferencesItem, 'channelId' | 'videoId'>

const initialState: PreferencesItem[] = []
export const SeeLaterReducer = createSlice({
  name: 'SeeLaterSlice',
  initialState,
  reducers: {
    seeLaterList: (state) => state,
    addSeeLaterItem: (state, action: PayloadAction<PreferencesItem>) => {
      // Modificar el estado directamente para agregar un nuevo like
      const filterElement = state?.filter(
        (element: PreferencesItem) => element.videoId === action.payload.videoId
      )
      !filterElement.length && state.push(action.payload)
    },
    removeSeeLaterItem: (state, action: PayloadAction<PreferencesItemID>) => {
      return state.filter((element: PreferencesItem) => element.videoId !== action.payload.videoId)
    }
  }
})

export const { addSeeLaterItem, removeSeeLaterItem, seeLaterList } = SeeLaterReducer.actions
