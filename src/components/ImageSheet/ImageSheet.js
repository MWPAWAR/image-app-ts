import { useSelector } from 'react-redux';
import { selectImageById } from '../../store/imageUiState/selectors';
import Image from './Image';
import ImageDeleteBtn from './ImageDeleteBtn';
import ImageDescription from './ImageDescription';
import ImageDetails from './ImageDetails';
import imageSheetStyles from './ImageSheet.module.css';

const ImageSheet = ({ activeTab }) => {
  const selectedImage = useSelector(selectImageById);

  return (
    <div className={imageSheetStyles.imageSheet}>
      <Image selectedImage={selectedImage} activeTab={activeTab} />
      <ImageDetails selectedImage={selectedImage} />
      <ImageDescription selectedImage={selectedImage} />
      <ImageDeleteBtn selectedImage={selectedImage} />
    </div>
  );
};

export default ImageSheet;
