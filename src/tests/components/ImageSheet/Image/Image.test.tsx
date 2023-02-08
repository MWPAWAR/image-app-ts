import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Image from '../../../../components/ImageSheet/Image/Image'
import { imageMock1 } from '../../../mocks/image'
import { toggleDrawer } from '../../../test-utils'

describe('Image', () => {
  const mockStore = configureStore([])
  const store = mockStore({})
  jest.spyOn(store, 'dispatch')

  const ImageComponent = () => (
    <MemoryRouter>
      <Provider store={store}>
        <Image
          activeTab="favorited"
          selectedImage={imageMock1}
          toggleDrawer={toggleDrawer}
        />
      </Provider>
    </MemoryRouter>
  )

  it('Matches snapshot', () => {
    const tree = renderer.create(<ImageComponent />)
    expect(tree).toMatchSnapshot()
  })

  it('Calls dispatch if user clicks on fav icon', async () => {
    const { getByTestId } = render(<ImageComponent />)
    await userEvent.click(getByTestId('fav-icon'))
    expect(store.dispatch).toBeCalledTimes(2)
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'images/toggleFavoriteImg',
      payload: { id: imageMock1.id },
    })
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'imageUiState/resetSelectedImg',
    })
  })
})
