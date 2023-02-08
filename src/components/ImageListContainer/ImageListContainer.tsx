import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
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

  const [isOpen, setIsOpen] = useState<boolean>(!!selectedImage)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

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
        <ImageList imageList={imageList} toggleDrawer={toggleDrawer} />
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className={imageListContainerStyles.sheetContainer}
      >
        <ImageSheet activeTab={activeTab} toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  )
}

export default withApiLoaderOrFailure(ImageListContainer)
