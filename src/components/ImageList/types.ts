import { ImageListTypes, ImageTypes } from '../types'

export interface ImageListProps {
  imageList: ImageListTypes
  toggleDrawer: () => void
}

export interface ImageListItemProps {
  image: ImageTypes
  toggleDrawer: () => void
}
