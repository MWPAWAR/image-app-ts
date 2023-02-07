import { get } from 'lodash'

const enResources = {
  imageListContainer: {
    photosHeading: 'Photos',
  },
  imageSheet: {
    deleteBtnLabel: 'Delete',
    description: 'Description',
    information: 'Information',
    uploadedBy: 'Uploaded by',
    createdAt: 'Created',
    lastModified: 'Last modified',
    dimensions: 'Dimensions',
    resolutions: 'Resolutions',
  },
  tabList: {
    recentlyAdded: 'Recently added',
    favorited: 'Favorited',
  },
  defaults: {
    loadingText: 'Loading...',
    errorText: 'Something went wrong',
    mbText: 'MB',
  },
}

export const getString = (path: string) => get(enResources, path, '')
