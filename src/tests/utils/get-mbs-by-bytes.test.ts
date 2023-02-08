import { getMbsByBytes, getMbsTextByBytes } from '../../utils/get-mbs-by-bytes'

describe('GetMbsByBytes and GetMbsTextByBytes', () => {
  it('returns correct output for getMbsByBytes', () => {
    let input: number = 4812732
    let output: string = '4.6'
    expect(getMbsByBytes(input)).toBe(output)

    input = 4312612
    output = '4.1'
    expect(getMbsByBytes(input)).toBe(output)
  })

  it('returns correct mbs text by getMbsTextByBytes', () => {
    let input: number = 4812732
    let output: string = '4.6 MB'
    expect(getMbsTextByBytes(input)).toBe(output)

    input = 4312612
    output = '4.1 MB'
    expect(getMbsTextByBytes(input)).toBe(output)
  })
})
