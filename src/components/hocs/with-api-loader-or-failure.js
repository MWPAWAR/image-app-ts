import { useSelector } from 'react-redux';
import { selectImagesFetchStatus } from '../../store/images/selectors';

const withApiLoaderOrFailure = Component => props => {
  const imagesFetchStatus = useSelector(selectImagesFetchStatus);

  if (imagesFetchStatus === 'loading') return <div>Loading...</div>;
  if (imagesFetchStatus === 'error') return <div>Error...</div>;

  return <Component {...props} />;
};

export default withApiLoaderOrFailure;
