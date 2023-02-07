export interface ImageUiState {
  selectedImg: string
}

interface ImageUiStateSetSelectedImgActionPayload {
  id: string
}

export interface ImageUiStateSetSelectedImgAction {
  type: string
  payload: ImageUiStateSetSelectedImgActionPayload
}
