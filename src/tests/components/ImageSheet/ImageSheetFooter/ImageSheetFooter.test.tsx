import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageSheetFooter from '../../../../components/ImageSheet/ImageSheetFooter/ImageSheetFooter'
import { imageMock1 } from '../../../mocks/image'
import { toggleDrawer } from '../../../test-utils'

describe('ImageSheetFooter', () => {
  const mockStore: MockStoreCreator = configureStore([])
  const store: MockStore = mockStore({})
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
    const tree: ReactTestRenderer = renderer.create(<ImageSheetFooterComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Calls dispatch twice if user clicks on delete button', async () => {
    const { getByText }: RenderResult = render(<ImageSheetFooterComponent />)
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
    const { getByText }: RenderResult = render(<ImageSheetFooterComponent />)
    await userEvent.click(getByText('Back'))
    expect(store.dispatch).toBeCalledTimes(1)
    expect(store.dispatch).toBeCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
    expect(toggleDrawer).toHaveBeenCalled()
  })
})
