import renderer, { ReactTestRenderer } from 'react-test-renderer'
import ImageDescription from '../../../../components/ImageSheet/ImageDescription/ImageDescription'
import { imageMock1, imageMock2 } from '../../../mocks/image'

describe('ImageDescription', () => {
  it('renders ImageDescription correctly', () => {
    const tree: ReactTestRenderer = renderer.create(
      <ImageDescription selectedImage={imageMock1} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('renders null if imageDescription is empty', () => {
    const tree: ReactTestRenderer = renderer.create(
      <ImageDescription selectedImage={imageMock2} />
    )
    expect(tree).toMatchSnapshot()
  })
})
