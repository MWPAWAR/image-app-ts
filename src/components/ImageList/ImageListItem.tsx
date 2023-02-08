import { useAppDispatch } from '../customHooks/hooks'
import { getMbsTextByBytes } from '../../utils/get-mbs-by-bytes'
import imageListItemStyles from './ImageListItem.module.css'
import { setSelectedImg } from '../../store/imageUiState/imageUiState'
import { ImageListItemProps } from './types'

const ImageListItem = ({ image }: ImageListItemProps) => {
  const dispatch = useAppDispatch()
  const handleImageClick = (): void => {
    dispatch(setSelectedImg({ id: image.id }))
  }

  return (
    <div
      data-testid="image-list-item"
      onClick={handleImageClick}
      className={imageListItemStyles.imageListItem}
    >
      <img
        tabIndex={0}
        src={image.url}
        className={imageListItemStyles.imageListItemImg}
        alt={image.filename}
      />
      <div className={imageListItemStyles.imageListItemName}>
        {image.filename}
      </div>
      <div className={imageListItemStyles.imageListItemSize}>
        {getMbsTextByBytes(image.sizeInBytes)}
      </div>
    </div>
  )
}

export default ImageListItem
