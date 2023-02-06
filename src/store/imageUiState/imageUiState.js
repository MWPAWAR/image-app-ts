import { createSlice } from '@reduxjs/toolkit';

const imageUiState = createSlice({
  name: 'imageUiState',
  initialState: { selectedImg: '' },
  reducers: {
    setSelectedImg(state, action) {
      state.selectedImg = action.payload;
    },
    resetSelectedImg(state) {
      state.selectedImg = '';
    }
  }
});

export const { setSelectedImg, resetSelectedImg } = imageUiState.actions;
export default imageUiState.reducer;
