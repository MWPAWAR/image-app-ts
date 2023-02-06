import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './images/images';
import imageUiStateReducer from './imageUiState/imageUiState';

export default configureStore({
  reducer: {
    images: imagesReducer,
    imageUiState: imageUiStateReducer,
  }
})
