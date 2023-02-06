import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetSelectedImg } from '../../store/imageUiState/imageUiState';
import tabListStyles from './TabList.module.css';

const tabNavigationPaths = {
  RECENTLY_ADDED: 'recently-added',
  FAVORITED: 'favorites',
};

const getCurrentNavigationRoute = () => (
  window.location.pathname.replace('/', '')
);

const TabList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentRoute = getCurrentNavigationRoute();
  const handleTabClick = (link) => {
    dispatch(resetSelectedImg());
    navigate(`/${tabNavigationPaths[link]}`);
  };

  return (
    <div className={tabListStyles.tabList}>
      <div
        className={classNames(
          tabListStyles.tabListItem,
          currentRoute === tabNavigationPaths.RECENTLY_ADDED ? tabListStyles.active : ''
        )}
        onClick={() => handleTabClick('RECENTLY_ADDED')}
      >
        Recently added
      </div>
      <div
        className={classNames(
          tabListStyles.tabListItem,
          currentRoute === tabNavigationPaths.FAVORITED ? tabListStyles.active : ''
        )}
        onClick={() => handleTabClick('FAVORITED')}
      >
        Favorited
      </div>
    </div>
  );
};

export default TabList;
