import dateSortComparator from '../../utils/date-sort-comparator'

describe('dateSortComparator', () => {
  it('returns -1 if aDate is less than bDate', () => {
    const aDate = '2017-07-15T08:23:20.000Z'
    const bDate = '2017-07-19T08:23:20.000Z'
    expect(dateSortComparator(aDate, bDate)).toBe(-1)
  })
  it('returns 1 if aDate is greater than bDate', () => {
    const aDate = '2017-07-17T08:23:20.000Z'
    const bDate = '2017-07-15T08:23:20.000Z'
    expect(dateSortComparator(aDate, bDate)).toBe(1)
  })
  it('returns 0 if aDate is less than bDate', () => {
    const aDate = '2017-07-15T08:23:20.000Z'
    const bDate = '2017-07-15T08:23:20.000Z'
    expect(dateSortComparator(aDate, bDate)).toBe(0)
  })
})
