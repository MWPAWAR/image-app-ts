import reducer, {
  setSelectedImg,
  resetSelectedImg,
} from '../../../store/imageUiState/imageUiState'
import { ImageUiState } from '../../../store/imageUiState/types'
import { imageMock1 } from '../../mocks/image'

describe('imageUiStateReducer', () => {
  it('returns initial state if action type is does not match in reducer', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ selectedImg: '' })
  })

  it('should add image id as selectedImg if setSelected action is called', () => {
    const previousState: ImageUiState = { selectedImg: '' }
    expect(
      reducer(previousState, setSelectedImg({ id: imageMock1.id }))
    ).toEqual({ selectedImg: imageMock1.id })
  })

  it('should reset selectedImg to empty string if resetSelectedImg action is called', () => {
    const previousState: ImageUiState = { selectedImg: imageMock1.id }
    expect(reducer(previousState, resetSelectedImg())).toEqual({
      selectedImg: '',
    })
  })
})
