import { getMonthDateAndYear } from '../../utils/date-util';
import imageDetailsStyles from './ImageDetails.module.css';

const Row = ({ label, value }) => (
  <div className={imageDetailsStyles.row}>
    <div className={imageDetailsStyles.label}>{label}</div>
    <div className={imageDetailsStyles.value}>{value}</div>
  </div>
);

const ImageDetails = ({ selectedImage }) => {
  return (
    <div className={imageDetailsStyles.imgDetails}>
      <div className={imageDetailsStyles.informationLabel}>Information</div>
      <Row label="Uploaded by" value={selectedImage.uploadedBy} />
      <Row label="Created" value={getMonthDateAndYear(selectedImage.createdAt)} />
      <Row label="Last modified" value={getMonthDateAndYear(selectedImage.updatedAt)} />
      <Row label="Dimensions" value={`${selectedImage.dimensions.height} X ${selectedImage.dimensions.width}`} />
      <Row label="Resolutions" value={`${selectedImage.resolution.height} X ${selectedImage.resolution.width}`} />
    </div>
  )
};

export default ImageDetails;
