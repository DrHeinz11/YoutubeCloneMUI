import { configureStore } from '@reduxjs/toolkit'
import {
  YoutubeAPI,
  SearchReducer,
  SubscriptionSlice,
  HistorySlice,
  FavouriteSlice
} from './reducers'

export const store = configureStore({
  reducer: {
    [YoutubeAPI.reducerPath]: YoutubeAPI.reducer,
    [SearchReducer.name]: SearchReducer.reducer,
    [SubscriptionSlice.name]: SubscriptionSlice.reducer,
    [HistorySlice.name]: HistorySlice.reducer,
    [FavouriteSlice.name]: FavouriteSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(YoutubeAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
