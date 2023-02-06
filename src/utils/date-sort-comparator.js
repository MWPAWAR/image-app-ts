import { getUnixTime } from './date-util';

export default (aDate, bDate) => {
  const firstDate = getUnixTime(aDate);
  const secondDate = getUnixTime(bDate);
  if (firstDate < secondDate) return -1;
  if (firstDate > secondDate) return 1;
  return 0;
};
