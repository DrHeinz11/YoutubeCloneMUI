import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Snippet } from '../../types/typeAPI'
// const initialState: Snippet[] | null = {
//   value: null
// }
const initialState: Snippet[] = []

// Crear el slice
export const LikeSlice = createSlice({
  name: 'LikeContainer',
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<Snippet>) => {
      // Modificar el estado directamente para agregar un nuevo like
      state.push(action.payload)
    }
  }
})

// Exportar las acciones generadas por el slice
export const { addLike } = LikeSlice.actions

// Exportar el reducer para ser utilizado en el store
// export default likeSlice.reducer
