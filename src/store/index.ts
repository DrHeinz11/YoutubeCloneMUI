import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  YoutubeAPI,
  SearchReducer,
  SubscriptionSlice,
  HistorySlice,
  FavouriteSlice
} from './reducers'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const persistedReducer = combineReducers({
  [SubscriptionSlice.name]: SubscriptionSlice.reducer,
  [HistorySlice.name]: HistorySlice.reducer,
  [FavouriteSlice.name]: FavouriteSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducerWithPersist = persistReducer(persistConfig, persistedReducer)

export const store = configureStore({
  reducer: {
    [YoutubeAPI.reducerPath]: YoutubeAPI.reducer,
    [SearchReducer.name]: SearchReducer.reducer,
    persisted: persistedReducerWithPersist
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(YoutubeAPI.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
