import ImageListItem from './ImageListItem';
import imageListStyles from './ImageList.module.css';

const ImageList = ({ imageList }) => {
  return (
    <div className={imageListStyles.imageList}>
      {imageList.map(image => <ImageListItem image={image} />)}
    </div>
  );
};

export default ImageList;
