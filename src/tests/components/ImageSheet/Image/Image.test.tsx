import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Image from '../../../../components/ImageSheet/Image/Image'
import { imageMock1 } from '../../../mocks/image'
import { toggleDrawer } from '../../../test-utils'

describe('Image', () => {
  const mockStore: MockStoreCreator = configureStore([])
  const store: MockStore = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Image
          activeTab="favorited"
          selectedImage={imageMock1}
          toggleDrawer={toggleDrawer}
        />
      </Provider>
    </MemoryRouter>
  )

  it('Matches snapshot', () => {
    const tree: ReactTestRenderer = renderer.create(<ImageComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Calls dispatch if user clicks on fav icon', async () => {
    const { getByTestId }: RenderResult = render(<ImageComponent />)
    await userEvent.click(getByTestId('fav-icon'))
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'images/toggleFavoriteImg',
      payload: { id: imageMock1.id },
    })
    expect(toggleDrawer).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
  })
})
