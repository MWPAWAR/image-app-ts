import { getString } from '../i18n'

describe('i18n', () => {
  it('getString returns empty string if the passed key not present in the resources', () => {
    expect(getString('abc.xyz')).toBe('')
  })

  it('getString returns valid string if the passed key is present in the resources', () => {
    expect(getString('imageListContainer.photosHeading')).toBe('Photos')
  })
})
