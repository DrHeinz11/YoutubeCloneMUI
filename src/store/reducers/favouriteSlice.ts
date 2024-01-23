import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Snippet } from '../../pages'

const initialState: Snippet[] = []

// Crear el slice
export const FavouriteSlice = createSlice({
  name: 'FavouriteList',
  initialState,
  reducers: {
    addToFavouriteList: (state, action: PayloadAction<Snippet>) => {
      // Modificar el estado directamente para agregar un nuevo like
      state = [action.payload, ...state]
      // state.push(action.payload)
    }
  }
})

// Exportar las acciones generadas por el slice
export const { addToFavouriteList } = FavouriteSlice.actions
