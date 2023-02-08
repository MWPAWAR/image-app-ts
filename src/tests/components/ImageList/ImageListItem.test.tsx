import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageListItem from '../../../components/ImageList/ImageListItem'
import { imageMock1 } from '../../mocks/image'
import { toggleDrawer } from '../../test-utils'

describe('ImageListItem', () => {
  const mockStore: MockStoreCreator = configureStore([])
  const store: MockStore = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageListItemComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ImageListItem image={imageMock1} toggleDrawer={toggleDrawer} />
      </Provider>
    </MemoryRouter>
  )

  it('Matches snapshot', () => {
    const tree: ReactTestRenderer = renderer.create(<ImageListItemComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('calls dispatch if user clicks on ImageListItem', async () => {
    const { getByTestId }: RenderResult = render(<ImageListItemComponent />)
    await userEvent.click(getByTestId('image-list-item'))
    expect(store.dispatch).toBeCalled()
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'imageUiState/setSelectedImg',
      payload: { id: imageMock1.id },
    })
  })
})
