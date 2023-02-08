import { getMonthDateAndYear, getUnixTime } from '../../utils/date-util'

describe('DateUtil', () => {
  it('returns unix time for a date', () => {
    const input = '2017-07-15T08:23:20.000Z'
    const output = 1500107000
    expect(getUnixTime(input)).toBe(output)
  })

  it('returns month date and year string for a given date', () => {
    const input = '2017-07-15T08:23:20.000Z'
    const output = 'July 15, 2017'
    expect(getMonthDateAndYear(input)).toBe(output)
  })
})
