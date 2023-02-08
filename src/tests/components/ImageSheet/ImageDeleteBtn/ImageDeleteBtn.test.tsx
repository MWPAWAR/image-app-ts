import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageDeleteBtn from '../../../../components/ImageSheet/ImageDeleteBtn/ImageDeleteBtn'
import { imageMock1 } from '../../../mocks/image'

describe('ImageDeleteBtn', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageDeleteBtnComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ImageDeleteBtn selectedImage={imageMock1} />
      </Provider>
    </MemoryRouter>
  )

  it('Matches ImageDeleteBtn snapshot', () => {
    const tree = renderer.create(<ImageDeleteBtnComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Calls dispatch twice if user clicks on delete button', async () => {
    const { getByText } = render(<ImageDeleteBtnComponent />)
    await userEvent.click(getByText('Delete'))
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.dispatch).toBeCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
    expect(store.dispatch).toBeCalledWith({
      type: 'images/deleteImg',
      payload: { id: imageMock1.id },
    })
  })
})
