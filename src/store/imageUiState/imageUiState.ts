import { createSlice } from '@reduxjs/toolkit'
import { ImageUiState, ImageUiStateSetSelectedImgAction } from './types'

const initialState: ImageUiState = { selectedImg: '' }

const imageUiState = createSlice({
  name: 'imageUiState',
  initialState,
  reducers: {
    setSelectedImg(
      state: ImageUiState,
      action: ImageUiStateSetSelectedImgAction
    ) {
      state.selectedImg = action.payload.id
    },
    resetSelectedImg(state: ImageUiState) {
      state.selectedImg = ''
    },
  },
})

export const { setSelectedImg, resetSelectedImg } = imageUiState.actions
export default imageUiState.reducer
