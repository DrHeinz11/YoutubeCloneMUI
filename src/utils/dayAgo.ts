import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(relativeTime);
dayjs.extend(advancedFormat);

export function daysAgo(dateString: string): string {
  const givenDate = dayjs(dateString);
  const currentDate = dayjs();
  const differenceInDays = currentDate.diff(givenDate, 'day');
  return `Hace ${differenceInDays} días.`;
}