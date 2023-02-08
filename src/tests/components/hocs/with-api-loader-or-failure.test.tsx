import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import withApiLoaderOrFailure from '../../../components/hocs/with-api-loader-or-failure'

describe('withApiLoaderOrFailure', () => {
  const mockStore: MockStoreCreator = configureStore([])

  it('Matches snapshot with loading state', () => {
    const store: MockStore = mockStore({
      images: {
        images: [],
        status: 'loading',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree: ReactTestRenderer = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })

  it('Matches snapshot with error state', () => {
    const store: MockStore = mockStore({
      images: {
        images: [],
        status: 'error',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree: ReactTestRenderer = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })

  it('Matches snapshot with success state', () => {
    const store: MockStore = mockStore({
      images: {
        images: [],
        status: 'success',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree: ReactTestRenderer = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
