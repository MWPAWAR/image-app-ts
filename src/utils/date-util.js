import moment from 'moment';

export const getMonthDateAndYear = (date) => moment(date).format('LL');

export const getUnixTime = (date) => moment(date).utc().unix();
