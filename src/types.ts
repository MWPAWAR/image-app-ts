export interface TabNavigationPaths {
  RECENTLY_ADDED: string
  FAVORITED: string
}

export type TabNavigationKey = keyof TabNavigationPaths

export interface ApiFetchStatus {
  IDLE: string,
  LOADING: string,
  SUCCESS: string,
  ERROR: string,
}
