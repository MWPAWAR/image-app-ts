import { useAppSelector } from '../../customHooks/hooks'
import { selectImageById } from '../../store/imageUiState/selectors'
import Image from './Image/Image'
import ImageDeleteBtn from './ImageDeleteBtn/ImageDeleteBtn'
import ImageDescription from './ImageDescription/ImageDescription'
import ImageDetails from './ImageDetails/ImageDetails'
import imageSheetStyles from './ImageSheet.module.css'
import { ImageSheetProps } from './types'

const ImageSheet = ({ activeTab }: ImageSheetProps) => {
  const selectedImage = useAppSelector(selectImageById)

  if (!selectedImage) return null

  return (
    <div className={imageSheetStyles.imageSheet}>
      <Image selectedImage={selectedImage} activeTab={activeTab} />
      <ImageDetails selectedImage={selectedImage} />
      <ImageDescription selectedImage={selectedImage} />
      <ImageDeleteBtn selectedImage={selectedImage} />
    </div>
  )
}

export default ImageSheet
