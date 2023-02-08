import { Fragment } from 'react'
import { useAppSelector } from '../customHooks/hooks'
import useFetchImages from '../customHooks/useFetchImages'
import ImageList from '../ImageList/ImageList'
import ImageSheet from '../ImageSheet/ImageSheet'
import withApiLoaderOrFailure from '../hocs/with-api-loader-or-failure'
import TabList from '../TabList/TabList'
import { selectImageById } from '../../store/imageUiState/selectors'
import {
  recentlyAddedImages,
  favoriteImages,
} from '../../store/images/selectors'
import imageListContainerStyles from './ImageListContainer.module.css'
import { ImageListContainerProps } from './types'
import { getString } from '../../i18n'
import { ImageListTypes, ImageTypes } from '../types'

const ImageListContainer = ({ activeTab }: ImageListContainerProps) => {
  useFetchImages()

  const selectedImage: ImageTypes | undefined = useAppSelector(selectImageById)
  const recentlyAddedImageList: ImageListTypes =
    useAppSelector(recentlyAddedImages)
  const favoriteImageList: ImageListTypes = useAppSelector(favoriteImages)
  const imageList: ImageListTypes =
    activeTab === 'recentlyAdded' ? recentlyAddedImageList : favoriteImageList

  return (
    <div className={imageListContainerStyles.mainContainer}>
      <div
        className={
          selectedImage
            ? imageListContainerStyles.listContainerSplitWidth
            : imageListContainerStyles.listContainerFullWidth
        }
      >
        <h1 className={imageListContainerStyles.heading}>
          {getString('imageListContainer.photosHeading')}
        </h1>
        <TabList />
        <ImageList imageList={imageList} />
      </div>
      {selectedImage ? (
        <div className={imageListContainerStyles.sheetContainer}>
          <ImageSheet activeTab={activeTab} />
        </div>
      ) : (
        <Fragment />
      )}
    </div>
  )
}

export default withApiLoaderOrFailure(ImageListContainer)
