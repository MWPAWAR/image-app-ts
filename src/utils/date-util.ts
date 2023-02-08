import moment from 'moment'

export const getMonthDateAndYear = (date: string): string =>
  moment(date).format('LL')

export const getUnixTime = (date: string): number =>
  moment(date).utc().unix()
