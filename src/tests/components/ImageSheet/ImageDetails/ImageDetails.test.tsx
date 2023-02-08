import renderer, { ReactTestRenderer } from 'react-test-renderer'
import ImageDetails, {
  Row,
} from '../../../../components/ImageSheet/ImageDetails/ImageDetails'
import { imageMock1 } from '../../../mocks/image'

describe('ImageDetails', () => {
  it('renders ImageDeatails correctly', () => {
    const tree: ReactTestRenderer = renderer.create(<ImageDetails selectedImage={imageMock1} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders ImageDetails Row correctly', () => {
    const tree: ReactTestRenderer = renderer.create(<Row label="ABC" value="XYZ" />)
    expect(tree).toMatchSnapshot()
  })
})
