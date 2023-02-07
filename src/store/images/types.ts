import { ImageListTypes } from '../../components/types'

export type ImagesStateStatus = string

export interface ImagesState {
  status: ImagesStateStatus
  images: ImageListTypes
}

interface ActionPayload {
  id: string
}

export interface ImagesReducerStateAction {
  payload: ActionPayload
}

export type ImagesFetchApiResponse = ImageListTypes

export interface ImagesExtraReducerStateAction {
  payload: ImageListTypes
}
