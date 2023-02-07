import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ImageListTypes } from '../../components/types'
import getImages from './api'
import {
  ImagesState,
  ImagesExtraReducerStateAction,
  ImagesReducerStateAction,
} from './types'

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response: ImageListTypes = await getImages()
  return response
})

const initialState: ImagesState = { status: 'idle', images: [] }

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    toggleFavoriteImg(
      state: ImagesState,
      action: ImagesReducerStateAction
    ): void {
      const index: number | undefined = state.images.findIndex(
        (image) => image.id === action.payload.id
      )
      if (typeof index !== 'undefined') {
        state.images[index].favorited = !state.images[index].favorited
      }
    },
    deleteImg(state: ImagesState, action: ImagesReducerStateAction): void {
      const index: number | undefined = state.images.findIndex(
        (image) => image.id === action.payload.id
      )
      if (typeof index !== 'undefined') {
        state.images.splice(index, 1)
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImages.pending, (state: ImagesState) => {
        state.status = 'loading'
      })
      .addCase(
        fetchImages.fulfilled,
        (state: ImagesState, action: ImagesExtraReducerStateAction) => {
          state.status = 'success'
          state.images = action.payload
        }
      )
      .addCase(fetchImages.rejected, (state: ImagesState) => {
        state.status = 'error'
      })
  },
})

export const { toggleFavoriteImg, deleteImg } = imagesSlice.actions
export default imagesSlice.reducer
