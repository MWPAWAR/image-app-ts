import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImagesFetchStatus } from '../store/images/selectors';
import { fetchImages } from '../store/images/images';

const useFetchImages = () => {
  const dispatch = useDispatch();
  const imagesFetchStatus = useSelector(selectImagesFetchStatus);

  useEffect(() => {
    if (imagesFetchStatus === 'idle') {
      dispatch(fetchImages());
    }
  }, [imagesFetchStatus, dispatch]);
};

export default useFetchImages;
