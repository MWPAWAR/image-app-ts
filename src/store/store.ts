import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit'
import imagesReducer from './images/images'
import imageUiStateReducer from './imageUiState/imageUiState'

export const rootReducer = combineReducers({
  images: imagesReducer,
  imageUiState: imageUiStateReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
