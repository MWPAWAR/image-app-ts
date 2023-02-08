import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import ImageList from '../../../components/ImageList/ImageList'
import { images } from '../../mocks/images'

describe('ImageList', () => {
  it('renders ImageList correctly', () => {
    const mockStore = configureStore([])
    const store = mockStore({})

    const ImageListComponent = () => (
      <MemoryRouter>
        <Provider store={store}>
          <ImageList imageList={images} />
        </Provider>
      </MemoryRouter>
    )

    const tree = renderer.create(<ImageListComponent />)
    expect(tree).toMatchSnapshot()
  })
})
