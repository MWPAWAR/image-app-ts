import { TabNavigationPaths, ApiFetchStatus } from './types'
export const API_FETCH_STATUS: ApiFetchStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export const tabNavigationPaths: TabNavigationPaths = {
  RECENTLY_ADDED: 'recently-added',
  FAVORITED: 'favorited',
}
