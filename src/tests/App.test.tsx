import { MemoryRouter } from 'react-router-dom'
import renderer, { ReactTestRenderer } from 'react-test-renderer'
import App from '../App'

describe('App', () => {
  it('matches snapshot correctly', () => {
    const tree: ReactTestRenderer = renderer.create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
