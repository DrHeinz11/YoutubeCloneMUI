import { configureStore } from '@reduxjs/toolkit'
import { youtubeAPI } from './reducers/apiFetch'
import searchReducer from './reducers/searchReducer'

export const store = configureStore({
  reducer: {
    [youtubeAPI.reducerPath]: youtubeAPI.reducer,
    [searchReducer.name]: searchReducer.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(youtubeAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
