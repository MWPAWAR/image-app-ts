export const selectImageById = (state) => (
  state.images.images.find(image => image.id === state.imageUiState.selectedImg)
);
