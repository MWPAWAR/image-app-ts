import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'
import configureStore from 'redux-mock-store'
import TabList from '../../../components/TabList/TabList'
import { mockedNavigate } from '../../../setupTests'

describe('TabList', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  jest.spyOn(store, 'dispatch')

  it('Matches snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Provider store={store}>
          <TabList />
        </Provider>
      </MemoryRouter>
    )

    expect(tree).toMatchSnapshot()
  })

  it('calls dispatch if user clicks tabListItem', async () => {
    const { getByText } = render(
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
