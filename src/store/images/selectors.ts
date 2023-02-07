import dateSortComparator from '../../utils/date-sort-comparator'
import { RootState } from '../store'
import { ImageTypes, ImageListTypes } from '../../components/types'

export const selectImagesFetchStatus = (state: RootState) => state.images.status

export const selectImageById = (
  state: RootState,
  id: string
): ImageTypes | undefined =>
  state.images.images.find((image) => image.id === id)

export const favoriteImages = (state: RootState): ImageListTypes =>
  state.images.images.filter((image) => image.favorited)

export const recentlyAddedImages = (state: RootState): ImageListTypes => {
  const images: ImageListTypes = [...state.images.images]

  return images.sort((imageA: ImageTypes, imageB: ImageTypes) =>
    dateSortComparator(imageA.createdAt, imageB.createdAt)
  )
}
