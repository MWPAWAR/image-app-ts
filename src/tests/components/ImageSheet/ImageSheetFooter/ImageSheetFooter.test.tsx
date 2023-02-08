import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageSheetFooter from '../../../../components/ImageSheet/ImageSheetFooter/ImageSheetFooter'
import { imageMock1 } from '../../../mocks/image'
import { toggleDrawer } from '../../../test-utils'

describe('ImageSheetFooter', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageSheetFooterComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ImageSheetFooter
          selectedImage={imageMock1}
          toggleDrawer={toggleDrawer}
        />
      </Provider>
    </MemoryRouter>
  )

  it('Matches ImageDeleteBtn snapshot', () => {
    const tree = renderer.create(<ImageSheetFooterComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Calls dispatch twice if user clicks on delete button', async () => {
    const { getByText } = render(<ImageSheetFooterComponent />)
    await userEvent.click(getByText('Delete'))
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.dispatch).toBeCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
    expect(toggleDrawer).toHaveBeenCalled()
    expect(store.dispatch).toBeCalledWith({
      type: 'images/deleteImg',
      payload: { id: imageMock1.id },
    })
  })

  it('Calls dispatch if user clicks on back button', async () => {
    const { getByText } = render(<ImageSheetFooterComponent />)
    await userEvent.click(getByText('Back'))
    expect(store.dispatch).toBeCalledTimes(1)
    expect(store.dispatch).toBeCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
    expect(toggleDrawer).toHaveBeenCalled()
  })
})
