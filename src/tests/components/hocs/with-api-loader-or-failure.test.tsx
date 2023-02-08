import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import withApiLoaderOrFailure from '../../../components/hocs/with-api-loader-or-failure'

describe('withApiLoaderOrFailure', () => {
  const mockStore = configureStore([])

  it('Matches snapshot with loading state', () => {
    const store = mockStore({
      images: {
        images: [],
        status: 'loading',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })

  it('Matches snapshot with error state', () => {
    const store = mockStore({
      images: {
        images: [],
        status: 'error',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })

  it('Matches snapshot with success state', () => {
    const store = mockStore({
      images: {
        images: [],
        status: 'success',
      },
    })

    const Component = () => <div>Blah</div>
    const MockComponent = withApiLoaderOrFailure(Component)

    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <MockComponent activeTab="recentlyAdded" />
        </Provider>
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
