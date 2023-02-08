import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ImageListItem from '../../../components/ImageList/ImageListItem'
import { imageMock1 } from '../../mocks/image'
import { toggleDrawer } from '../../test-utils'

describe('ImageListItem', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageListItemComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <ImageListItem image={imageMock1} toggleDrawer={toggleDrawer} />
      </Provider>
    </MemoryRouter>
  )

  it('Matches snapshot', () => {
    const tree = renderer.create(<ImageListItemComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('calls dispatch if user clicks on ImageListItem', async () => {
    const { getByTestId } = render(<ImageListItemComponent />)
    await userEvent.click(getByTestId('image-list-item'))
    expect(store.dispatch).toBeCalled()
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'imageUiState/setSelectedImg',
      payload: { id: imageMock1.id },
    })
  })
})
