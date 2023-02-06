import { useDispatch } from 'react-redux';
import { getMbsTextByBytes } from '../../utils/get-mbs-by-bytes';
import imageListItemStyles from './ImageListItem.module.css';
import { setSelectedImg } from '../../store/imageUiState/imageUiState';

const ImageListItem = ({ image }) => {
  const dispatch = useDispatch();
  const handleImageClick = () => dispatch(setSelectedImg(image.id));

  return (
    <div onClick={handleImageClick} className={imageListItemStyles.imageListItem}>
      <img
        tabIndex={0}
        src={image.url}
        className={imageListItemStyles.imageListItemImg}
        alt={image.filename}
      />
      <div className={imageListItemStyles.imageListItemName}>{image.filename}</div>
      <div className={imageListItemStyles.imageListItemSize}>{getMbsTextByBytes(image.sizeInBytes)}</div>
    </div>
  );
};

export default ImageListItem;
