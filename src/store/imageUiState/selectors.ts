import { RootState } from '../store'
import { ImageTypes } from '../../components/types'

export const selectImageById = (state: RootState): ImageTypes | undefined =>
  state.images.images.find(
    (image: ImageTypes) => image.id === state.imageUiState.selectedImg
  )
