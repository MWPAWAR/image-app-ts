import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from './images/images'
import imageUiStateReducer from './imageUiState/imageUiState'

const store = configureStore({
  reducer: {
    images: imagesReducer,
    imageUiState: imageUiStateReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
