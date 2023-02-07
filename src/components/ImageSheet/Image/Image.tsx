import classNames from 'classnames'
import imageStyles from './Image.module.css'
import { useAppDispatch } from '../../../customHooks/hooks'
import { getMbsTextByBytes } from '../../../utils/get-mbs-by-bytes'
import { toggleFavoriteImg } from '../../../store/images/images'
import { resetSelectedImg } from '../../../store/imageUiState/imageUiState'
import { ImagePropsType } from './types'

const Image = ({ activeTab, selectedImage }: ImagePropsType) => {
  const dispatch = useAppDispatch()
  const handleFavtClick = () => {
    dispatch(toggleFavoriteImg({ id: selectedImage.id }))
    // Do this to reset the selected img if the active tab is favorites.
    if (activeTab === 'favorites') dispatch(resetSelectedImg())
  }

  return (
    <div>
      <img
        src={selectedImage.url}
        className={imageStyles.image}
        alt={selectedImage.filename}
      />
      <div className={imageStyles.imgNameAndFavtIconContainer}>
        <div className={imageStyles.imageName}>{selectedImage.filename}</div>
        <div
          className={classNames(
            imageStyles.favtIcon,
            selectedImage.favorited
              ? imageStyles.favtIconFilled
              : imageStyles.favtIconOutlined
          )}
          onClick={handleFavtClick}
        />
      </div>
      <div className={imageStyles.imageSize}>
        {getMbsTextByBytes(selectedImage.sizeInBytes)}
      </div>
    </div>
  )
}

export default Image