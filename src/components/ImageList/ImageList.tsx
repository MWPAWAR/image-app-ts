import ImageListItem from './ImageListItem'
import imageListStyles from './ImageList.module.css'
import { ImageListProps } from './types'
import { ImageTypes } from '../types'

const ImageList = ({ imageList }: ImageListProps) => (
  <div className={imageListStyles.imageList}>
    {imageList.map((image: ImageTypes) => (
      <ImageListItem image={image} />
    ))}
  </div>
)

export default ImageList
