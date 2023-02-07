import { getString } from '../../../i18n'
import imageDescStyles from './ImageDescription.module.css'
import { ImageDescriptionPropsType } from './types'

const ImageDescription = ({ selectedImage }: ImageDescriptionPropsType) =>
  selectedImage.description ? (
    <div className={imageDescStyles.imgDescription}>
      <div className={imageDescStyles.label}>
        {getString('imageSheet.description')}
      </div>
      <div className={imageDescStyles.description}>
        {selectedImage.description}
      </div>
    </div>
  ) : null

export default ImageDescription
