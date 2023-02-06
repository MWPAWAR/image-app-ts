import dateSortComparator from '../../utils/date-sort-comparator';

export const selectImagesFetchStatus = (state) => (state.images.status);

export const selectImageById = (state, id) => (
  state.images.images.find(image => image.id === id)
);

export const favoriteImages = (state) => (
  state.images.images.filter(image => image.favorited)
);

export const recentlyAddedImages = (state) => {
  const images = [...state.images.images];
  return images.sort((imageA, imageB) =>
    dateSortComparator(imageA.createdAt, imageB.createdAt)
  );
};
