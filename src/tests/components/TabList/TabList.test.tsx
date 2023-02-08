import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TabList from '../../../components/TabList/TabList'
import { mockedNavigate } from '../../../setupTests'

describe('TabList', () => {
  const mockStore: MockStoreCreator = configureStore([])
  const store: MockStore = mockStore({})
  jest.spyOn(store, 'dispatch')

  it('Matches snapshot', () => {
    const tree: ReactTestRenderer = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <TabList />
        </Provider>
      </MemoryRouter>
    )

    expect(tree).toMatchSnapshot()
  })

  it('calls dispatch if user clicks tabListItem', async () => {
    const { getByText }: RenderResult = render(
      <MemoryRouter>
        <Provider store={store}>
          <TabList />
        </Provider>
      </MemoryRouter>
    )

    jest.spyOn(store, 'dispatch')

    await userEvent.click(getByText('Recently added'))
    expect(store.dispatch).toBeCalled()
    expect(mockedNavigate).toHaveBeenCalledWith('/recently-added')

    await userEvent.click(getByText('Favorited'))
    expect(store.dispatch).toBeCalled()
    expect(mockedNavigate).toHaveBeenCalledWith('/favorited')
  })
})
