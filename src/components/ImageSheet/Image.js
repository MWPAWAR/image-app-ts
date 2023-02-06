import { useDispatch } from 'react-redux';
import imageStyles from './Image.module.css';
import classNames from 'classnames';
import { getMbsTextByBytes } from '../../utils/get-mbs-by-bytes';
import { toggleFavoriteImg } from '../../store/images/images';
import { resetSelectedImg } from '../../store/imageUiState/imageUiState';

const Image = ({ activeTab, selectedImage }) => {
  const dispatch = useDispatch();
  const handleFavtClick = () => {
    dispatch(toggleFavoriteImg(selectedImage.id));
    // This is to reset the selected img if the active tab is favorites.
    if (activeTab === 'favorites') dispatch(resetSelectedImg());
  };

  return (
    <div>
      <img
        src={selectedImage.url}
        className={imageStyles.image}
        alt={selectedImage.filename}
      />
      <div className={imageStyles.imgNameAndFavtIconContainer}>
        <div className={imageStyles.imageName}>{selectedImage.filename}</div>
        <div className={classNames(
          imageStyles.favtIcon,
          selectedImage.favorited ? imageStyles.favtIconFilled : imageStyles.favtIconOutlined
        )} onClick={handleFavtClick} />
      </div>
      <div className={imageStyles.imageSize}>{getMbsTextByBytes(selectedImage.sizeInBytes)}</div>
    </div>
  );
};

export default Image;
