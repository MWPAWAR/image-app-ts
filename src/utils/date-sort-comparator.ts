import { getUnixTime } from './date-util'

export default (aDate: string, bDate: string) => {
  const firstDate: number = getUnixTime(aDate)
  const secondDate: number = getUnixTime(bDate)

  if (firstDate < secondDate) return -1
  if (firstDate > secondDate) return 1
  return 0
}
