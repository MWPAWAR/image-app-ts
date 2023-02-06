import imageDescStyles from './ImageDescription.module.css';

const ImageDescription = ({ selectedImage }) => (
  selectedImage.description ? (
    <div className={imageDescStyles.imgDescription}>
      <div className={imageDescStyles.label}>Description</div>
      <div className={imageDescStyles.description}>{selectedImage.description}</div>
    </div>
  ) : null
);

export default ImageDescription;
