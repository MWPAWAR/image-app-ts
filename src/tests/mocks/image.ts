import { ImageTypes } from '../../components/types'

export const imageMock1: ImageTypes = {
  id: '74957345-6f5b-4d66-ae9d-5d0071b40279',
  url: 'https://agencyanalytics-api.vercel.app/images/0.jpg',
  filename: 'tennessee_female_rubber.jpg',
  description:
    'Laboriosam eligendi inventore officia nemo. Quisquam explicabo voluptatem. Illo laborum facilis.',
  uploadedBy: 'Ms. Jimmie Cole',
  createdAt: '2017-07-15T08:23:20.462Z',
  updatedAt: '2022-12-16T12:41:33.736Z',
  dimensions: {
    height: 4800,
    width: 3200,
  },
  resolution: {
    height: 72,
    width: 72,
  },
  sizeInBytes: 4812732,
  sharedWith: [],
  favorited: true,
}

export const imageMock1WithFavoritedInverted: ImageTypes = {
  id: '74957345-6f5b-4d66-ae9d-5d0071b40279',
  url: 'https://agencyanalytics-api.vercel.app/images/0.jpg',
  filename: 'tennessee_female_rubber.jpg',
  description:
    'Laboriosam eligendi inventore officia nemo. Quisquam explicabo voluptatem. Illo laborum facilis.',
  uploadedBy: 'Ms. Jimmie Cole',
  createdAt: '2017-07-15T08:23:20.462Z',
  updatedAt: '2022-12-16T12:41:33.736Z',
  dimensions: {
    height: 4800,
    width: 3200,
  },
  resolution: {
    height: 72,
    width: 72,
  },
  sizeInBytes: 4812732,
  sharedWith: [],
  favorited: false,
}

export const imageMock2: ImageTypes = {
  id: '74957345-6f5b-4d66-ae9d-5d0071b40280',
  url: 'https://agencyanalytics-api.vercel.app/images/1.jpg',
  filename: 'virginia.jpg',
  uploadedBy: 'Elvira Willms',
  createdAt: '2015-09-21T05:49:02.644Z',
  updatedAt: '2022-10-30T10:19:17.504Z',
  dimensions: {
    height: 2140,
    width: 3200,
  },
  resolution: {
    height: 72,
    width: 72,
  },
  sizeInBytes: 4312612,
  sharedWith: [
    {
      id: '00f507f6-af14-4f34-a553-b16ba72d3eec',
      name: 'Dawn Quitzon',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/314.jpg',
    },
    {
      id: 'e4d9d93e-28e9-4105-9463-18b30952cae3',
      name: 'Rick Dietrich',
      avatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1030.jpg',
    },
  ],
  favorited: false,
}
