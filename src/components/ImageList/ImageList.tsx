import ImageListItem from './ImageListItem'
import imageListStyles from './ImageList.module.css'
import { ImageListProps } from './types'
import { ImageTypes } from '../types'

const ImageList = ({ imageList, toggleDrawer }: ImageListProps) => (
  <div className={imageListStyles.imageList}>
    {imageList.map((image: ImageTypes) => (
      <ImageListItem key={image.id} image={image} toggleDrawer={toggleDrawer} />
    ))}
  </div>
)

export default ImageList
