import reducer, {
  toggleFavoriteImg,
  deleteImg,
} from '../../../store/images/images'
import { ImagesState } from '../../../store/images/types'
import {
  imageMock1,
  imageMock1WithFavoritedInverted,
  imageMock2,
} from '../../mocks/image'
import { images } from '../../mocks/images'

describe('imagesStateReducer', () => {
  it('returns initial state if action type is does not match in reducer', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      status: 'idle',
      images: [],
    })
  })

  it('should toggle favorited boolean if image id is matched', () => {
    const previousState: ImagesState = {
      status: 'success',
      images: [imageMock1],
    }
    const output: ImagesState = {
      status: 'success',
      images: [imageMock1WithFavoritedInverted],
    }
    expect(
      reducer(previousState, toggleFavoriteImg({ id: imageMock1.id }))
    ).toEqual(output)
  })

  it('should delete an image object if deleteImg action is called', () => {
    const previousState: ImagesState = {
      status: 'success',
      images,
    }
    const output: ImagesState = { status: 'success', images: [imageMock2] }
    expect(reducer(previousState, deleteImg({ id: imageMock1.id }))).toEqual(
      output
    )
  })
})
