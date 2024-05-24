import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PreferenceDetails, PreferencesItem } from '../../types'

const initialState: PreferenceDetails = { liked: [], unLiked: [] }

// Crear el slice
export const FavouriteSlice = createSlice({
  name: 'PreferenceList',
  initialState,
  reducers: {
    addToFavouriteList: (state, action: PayloadAction<PreferencesItem>) => {
      // Modificar el estado directamente para agregar un nuevo like
      const filterElement = state.liked.filter(
        (element: PreferencesItem) => element.videoId === action.payload.videoId
      )
      !filterElement.length && state.liked.push(action.payload)
    },

    addToUnLikedList: (state, action: PayloadAction<PreferencesItem>) => {
      // Modificar el estado directamente para agregar un nuevo like
      const filterElement = state.unLiked.filter(
        (element: PreferencesItem) => element.videoId === action.payload.videoId
      )
      !filterElement.length && state.unLiked.push(action.payload)
    }
  }
})

// Exportar las acciones generadas por el slice
export const { addToFavouriteList } = FavouriteSlice.actions
