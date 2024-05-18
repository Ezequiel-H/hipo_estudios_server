export const createEnumRegex = values => new RegExp(`\\b(?:${values.join('|')})\\b`);

export const isEmptyString = string => string === '';
