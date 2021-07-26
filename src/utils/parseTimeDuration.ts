import moment from 'moment';

export const parseTimeDuration = (startDate: string, endDate: string): string => {
  const start  = moment(startDate, "HH:mm");
  const finish = moment(endDate, "HH:mm");

  const diff = start.diff(finish);

  const duration = moment.duration(diff).abs();

  const format = duration.hours() + moment.utc(diff).format(":mm");

  return format;
}