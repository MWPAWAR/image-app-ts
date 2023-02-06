import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import useFetchImages from '../../customHooks/useFetchImages';
import ImageList from '../ImageList/ImageList';
import ImageSheet from '../ImageSheet/ImageSheet';
import withApiLoaderOrFailure from '../hocs/with-api-loader-or-failure';
import TabList from '../TabList/TabList';
import { selectImageById } from '../../store/imageUiState/selectors';
import { recentlyAddedImages, favoriteImages } from '../../store/images/selectors';
import imageListContainerStyles from './ImageListContainer.module.css';

const ImageListContainer = ({ activeTab }) => {
  useFetchImages();

  const selectedImage = useSelector(selectImageById);
  const recentlyAddedImageList = useSelector(recentlyAddedImages);
  const favoriteImageList = useSelector(favoriteImages);
  const imageList = activeTab === 'recentlyAdded'
    ? recentlyAddedImageList
    : favoriteImageList;

  return (
    <div className={imageListContainerStyles.mainContainer}>
      <div className={selectedImage ? imageListContainerStyles.listContainerSplitWidth : imageListContainerStyles.listContainerFullWidth}>
        <h1 className={imageListContainerStyles.heading}>Photos</h1>
        <TabList />
        <ImageList imageList={imageList} />
      </div>
      {selectedImage ? (
        <div className={imageListContainerStyles.sheetContainer}>
          <ImageSheet activeTab={activeTab} />
        </div>
      ) : <Fragment />}
    </div>
  );
};

export default withApiLoaderOrFailure(ImageListContainer);
