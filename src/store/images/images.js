import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getImages from './api';

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await getImages();
  return response;
});

const imagesSlice = createSlice({
  name: 'images',
  initialState: { status: 'idle', images: [] },
  reducers: {
    toggleFavoriteImg(state, action) {
      const index = state.images.findIndex((image) => image.id === action.payload);
      if (typeof index !== 'undefined') {
        state.images[index].favorited = !state.images[index].favorited;
      }
    },
    deleteImg(state, action) {
      const index = state.images.findIndex((image) => image.id === action.payload);
      if (typeof index !== 'undefined') {
        state.images.splice(index, 1);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'success';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.error = 'error';
      })
  }
});

export const { toggleFavoriteImg, deleteImg } = imagesSlice.actions;
export default imagesSlice.reducer;
