import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import ImageSheet from '../../../components/ImageSheet/ImageSheet'
import { imageMock1 } from '../../mocks/image'
import { images } from '../../mocks/images'
import { toggleDrawer } from '../../test-utils'

describe('ImageSheet', () => {
  it('ImageSheet matches snapshot with data', () => {
    const mockStore: MockStoreCreator = configureStore([])
    const store: MockStore = mockStore({
      images: {
        images,
      },
      imageUiState: {
        selectedImg: imageMock1.id,
      },
    })
    jest.spyOn(store, 'dispatch')

    const ImageSheetComponent = () => (
      <MemoryRouter>
        <Provider store={store}>
          <ImageSheet activeTab="recentlyAdded" toggleDrawer={toggleDrawer} />
        </Provider>
      </MemoryRouter>
    )

    const tree: ReactTestRenderer = renderer.create(<ImageSheetComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('ImageSheet matches snapshot with data', () => {
    const mockStore: MockStoreCreator = configureStore([])
    const store: MockStore = mockStore({
      images: {
        images,
      },
      imageUiState: {
        selectedImg: '',
      },
    })
    jest.spyOn(store, 'dispatch')

    const ImageSheetComponent = () => (
      <MemoryRouter>
        <Provider store={store}>
          <ImageSheet activeTab="recentlyAdded" toggleDrawer={toggleDrawer} />
        </Provider>
      </MemoryRouter>
    )

    const tree: ReactTestRenderer = renderer.create(<ImageSheetComponent />)
    expect(tree).toMatchSnapshot()
  })
})
