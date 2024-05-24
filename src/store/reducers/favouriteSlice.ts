import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavouriteDetails } from '../../types'

const initialState: FavouriteDetails[] = []

// Crear el slice
export const FavouriteSlice = createSlice({
  name: 'FavouriteList',
  initialState,
  reducers: {
    addToFavouriteList: (state, action: PayloadAction<FavouriteDetails>) => {
      // Modificar el estado directamente para agregar un nuevo like
      const filterElement = state.filter(
        (element: FavouriteDetails) => element.videoId === action.payload.videoId
      )
      console.log(action.payload)
      !filterElement.length && state.push(action.payload)
    },
  }
})

// Exportar las acciones generadas por el slice
export const { addToFavouriteList } = FavouriteSlice.actions
