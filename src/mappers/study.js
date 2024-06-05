import { parseDate, isValidDate } from '../utils/date.js';

export const mapStudy = ({
  type,
  result,
  date,
  observation,
  patient,
  professional,
  center,
}) => ({
  type,
  result,
  date: isValidDate(date) ? date : parseDate(date),
  observation,
  patient,
  professional,
  center,
});

export const a = 2;
