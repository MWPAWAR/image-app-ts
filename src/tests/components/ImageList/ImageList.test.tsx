import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import ImageList from '../../../components/ImageList/ImageList'
import { images } from '../../mocks/images'
import { toggleDrawer } from '../../test-utils'

describe('ImageList', () => {
  it('renders ImageList correctly', () => {
    const mockStore: MockStoreCreator = configureStore([])
    const store: MockStore = mockStore({})

    const ImageListComponent = () => (
      <MemoryRouter>
        <Provider store={store}>
          <ImageList imageList={images} toggleDrawer={toggleDrawer} />
        </Provider>
      </MemoryRouter>
    )

    const tree: ReactTestRenderer = renderer.create(<ImageListComponent />)
    expect(tree).toMatchSnapshot()
  })
})
