import { getString } from '../../../i18n'
import { getMonthDateAndYear } from '../../../utils/date-util'
import imageDetailsStyles from './ImageDetails.module.css'
import { RowProps, ImageDetailsProps } from './types'

export const Row = ({ label, value }: RowProps) => (
  <div className={imageDetailsStyles.row}>
    <div className={imageDetailsStyles.label}>{label}</div>
    <div className={imageDetailsStyles.value}>{value}</div>
  </div>
)

const ImageDetails = ({ selectedImage }: ImageDetailsProps) => (
  <div className={imageDetailsStyles.imgDetails}>
    <div className={imageDetailsStyles.informationLabel}>
      {getString('imageSheet.information')}
    </div>
    <Row
      label={getString('imageSheet.uploadedBy')}
      value={selectedImage.uploadedBy}
    />
    <Row
      label={getString('imageSheet.createdAt')}
      value={getMonthDateAndYear(selectedImage.createdAt)}
    />
    <Row
      label={getString('imageSheet.lastModified')}
      value={getMonthDateAndYear(selectedImage.updatedAt)}
    />
    <Row
      label={getString('imageSheet.dimensions')}
      value={`${selectedImage.dimensions.height} X ${selectedImage.dimensions.width}`}
    />
    <Row
      label={getString('imageSheet.resolutions')}
      value={`${selectedImage.resolution.height} X ${selectedImage.resolution.width}`}
    />
  </div>
)

export default ImageDetails
