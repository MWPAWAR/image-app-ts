export interface DimensionsTypes {
  height: number
  width: number
}

export interface ResolutionTypes {
  height: number
  width: number
}

export interface SharedWithPersonTypes {
  id: string
  name: string
  avatar: string
}

export interface ImageTypes {
  id: string
  url: string
  filename: string
  description?: string
  uploadedBy: string
  createdAt: string
  updatedAt: string
  dimensions: DimensionsTypes
  resolution: ResolutionTypes
  sizeInBytes: number
  sharedWith?: Array<SharedWithPersonTypes>
  favorited: boolean
}

export type ImageListTypes = Array<ImageTypes>
