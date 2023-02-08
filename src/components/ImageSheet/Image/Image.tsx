import classNames from 'classnames'
import imageStyles from './Image.module.css'
import { useAppDispatch } from '../../customHooks/hooks'
import { getMbsTextByBytes } from '../../../utils/get-mbs-by-bytes'
import { toggleFavoriteImg } from '../../../store/images/images'
import { resetSelectedImg } from '../../../store/imageUiState/imageUiState'
import { ImagePropsType } from './types'

const Image = ({ activeTab, selectedImage, toggleDrawer }: ImagePropsType) => {
  const dispatch = useAppDispatch()
  const handleFavtClick = (): void => {
    dispatch(toggleFavoriteImg({ id: selectedImage.id }))
    // Do this to reset the selected img if the active tab is favorited.
    if (activeTab === 'favorited') {
      toggleDrawer()
      dispatch(resetSelectedImg())
    }
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
          data-testid="fav-icon"
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
