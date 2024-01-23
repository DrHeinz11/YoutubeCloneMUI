import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SubscriptionType } from '../../types'
// const initialState: Snippet[] | null = {
//   value: null
// }
const initialState: SubscriptionType[] = []

// Crear el slice
export const SubscriptionSlice = createSlice({
  name: 'SubscriptionSlice',
  initialState,
  reducers: {
    addSubscription: (state, action: PayloadAction<SubscriptionType>) => {
      // Modificar el estado directamente para agregar un nuevo like
      state.push(action.payload)
    }
  }
})

// Exportar las acciones generadas por el slice
export const { addSubscription } = SubscriptionSlice.actions

// Exportar el reducer para ser utilizado en el store
// export default likeSlice.reducer
