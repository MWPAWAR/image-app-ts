import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ImageListTypes } from '../../components/types'
import getImages from './api'
import { API_FETCH_STATUS } from '../../constants'
import {
  ImagesState,
  ImagesExtraReducerStateAction,
  ImagesReducerStateAction,
  ImagesFetchApiResponse,
} from './types'

export const fetchImages = createAsyncThunk<ImagesFetchApiResponse>(
  'images/fetchImages',
  async () => {
    const response: ImageListTypes = await getImages()
    return response
  }
)

const initialState: ImagesState = {
  status: API_FETCH_STATUS.IDLE,
  images: [],
}

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
        state.status = API_FETCH_STATUS.LOADING
      })
      .addCase(
        fetchImages.fulfilled,
        (state: ImagesState, action: ImagesExtraReducerStateAction) => {
          state.status = API_FETCH_STATUS.SUCCESS
          state.images = action.payload
        }
      )
      .addCase(fetchImages.rejected, (state: ImagesState) => {
        state.status = API_FETCH_STATUS.ERROR
      })
  },
})

export const { toggleFavoriteImg, deleteImg } = imagesSlice.actions
export default imagesSlice.reducer
