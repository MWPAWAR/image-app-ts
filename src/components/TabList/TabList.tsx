import { FC } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../customHooks/hooks'
import { resetSelectedImg } from '../../store/imageUiState/imageUiState'
import tabListStyles from './TabList.module.css'
import { TabNavigationKey, TabNavigationPaths } from './types'

const tabNavigationPaths: TabNavigationPaths = {
  RECENTLY_ADDED: 'recently-added',
  FAVORITED: 'favorites',
}

const getCurrentNavigationRoute = (): string =>
  window.location.pathname.replace('/', '')

const TabList: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const currentRoute: string = getCurrentNavigationRoute()
  const handleTabClick = (link: string) => {
    dispatch(resetSelectedImg())
    navigate(`/${tabNavigationPaths[link as TabNavigationKey]}`)
  }

  return (
    <div className={tabListStyles.tabList}>
      <div
        className={classNames(
          tabListStyles.tabListItem,
          currentRoute === tabNavigationPaths.RECENTLY_ADDED
            ? tabListStyles.active
            : ''
        )}
        onClick={() => handleTabClick('RECENTLY_ADDED')}
      >
        Recently added
      </div>
      <div
        className={classNames(
          tabListStyles.tabListItem,
          currentRoute === tabNavigationPaths.FAVORITED
            ? tabListStyles.active
            : ''
        )}
        onClick={() => handleTabClick('FAVORITED')}
      >
        Favorited
      </div>
    </div>
  )
}

export default TabList
