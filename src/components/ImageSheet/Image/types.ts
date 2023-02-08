import { ImageTypes } from '../../types'

export interface ImagePropsType {
  selectedImage: ImageTypes
  activeTab: string
  toggleDrawer: () => void
}
