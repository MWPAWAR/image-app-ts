import { useDispatch } from 'react-redux';
import imageDeleteBtnStyles from './ImageDeleteBtn.module.css';
import { deleteImg } from '../../store/images/images';
import { resetSelectedImg } from '../../store/imageUiState/imageUiState';

const ImageDeleteBtn = ({ selectedImage }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteImg(selectedImage.id));
    dispatch(resetSelectedImg(selectedImage.id));
  };

  return (
    <div className={imageDeleteBtnStyles.deleteBtnFooter}>
      <button
        className={imageDeleteBtnStyles.button}
        onClick={handleDeleteClick}
        >Delete</button>
    </div>
  )
};

export default ImageDeleteBtn;
