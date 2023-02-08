import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { imageMock1 } from '../../mocks/image'
import { images } from '../../mocks/images'
import ImageListContainer from '../../../components/ImageListContainer/ImageListContainer'

describe('ImageListContainer', () => {
  const mockStore = configureStore([])
  const store = mockStore({
    images: {
      images,
    },
    imageUiState: {
      selectedImg: '',
    },
  })
  jest.spyOn(store, 'dispatch')

  it('ImageListContainer matches snapshot for Recently added tab', () => {
    const Component = (
      <MemoryRouter>
        <Provider store={store}>
          <ImageListContainer activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    const tree = renderer.create(Component)
    expect(tree).toMatchSnapshot()
  })

  it('ImageListContainer matches snapshot for Favorited tab', () => {
    const Component = (
      <MemoryRouter>
        <Provider store={store}>
          <ImageListContainer activeTab="favorited" />
        </Provider>
      </MemoryRouter>
    )
    const tree = renderer.create(Component)
    expect(tree).toMatchSnapshot()
  })

  it('ImageListContainer matches snapshot if user have selected an image', () => {
    const mockStore = configureStore([])
    const store = mockStore({
      images: {
        images,
      },
      imageUiState: {
        selectedImg: imageMock1.id,
      },
    })

    const Component = (
      <MemoryRouter>
        <Provider store={store}>
          <ImageListContainer activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    const tree = renderer.create(Component)
    expect(tree).toMatchSnapshot()
  })
})
