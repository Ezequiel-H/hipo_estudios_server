import { parseDate } from '../utils/date.js';

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
  date: parseDate(date),
  observation,
  patient,
  professional,
  center,
});

export const a = 2;
