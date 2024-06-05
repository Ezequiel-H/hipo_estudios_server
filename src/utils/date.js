export const defaultDate = 1500000000;

export const defaultDateDaysOffset = (days) => defaultDate + days * 24 * 60 * 60 * 1000;

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const parseDate = (dateString) => {
  // Split the input string by the "/" separator
  const [day, month, year] = dateString.split('/').map(Number);

  // JavaScript Date object expects the month to be zero-based (0 = January, 1 = February, etc.)
  // So we need to subtract 1 from the month
  const date = new Date(year, month - 1, day);

  return date;
};

export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !Number.isNaN(date.getTime());
};
