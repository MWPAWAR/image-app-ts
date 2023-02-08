import { useAppSelector } from '../customHooks/hooks'
import { selectImageById } from '../../store/imageUiState/selectors'
import { ImageTypes } from '../types'
import Image from './Image/Image'
import ImageSheetFooter from './ImageSheetFooter/ImageSheetFooter'
import ImageDescription from './ImageDescription/ImageDescription'
import ImageDetails from './ImageDetails/ImageDetails'
import imageSheetStyles from './ImageSheet.module.css'
import { ImageSheetProps } from './types'

const ImageSheet = ({ activeTab, toggleDrawer }: ImageSheetProps) => {
  const selectedImage: ImageTypes | undefined = useAppSelector(selectImageById)

  if (!selectedImage) return null

  return (
    <div className={imageSheetStyles.imageSheet}>
      <Image
        selectedImage={selectedImage}
        activeTab={activeTab}
        toggleDrawer={toggleDrawer}
      />
      <ImageDetails selectedImage={selectedImage} />
      <ImageDescription selectedImage={selectedImage} />
      <ImageSheetFooter
        selectedImage={selectedImage}
        toggleDrawer={toggleDrawer}
      />
    </div>
  )
}

export default ImageSheet
