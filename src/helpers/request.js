import { entityNotFound } from '../errors.js';

const setHeaders = (
  res,
  headers = {},
) => Object.entries(headers).forEach((header) => res.header(...header));

const setAttachment = (res, file = undefined) => file && res.attachment(file);

export const endRequest = ({
  response = undefined, code, res, headers = {}, file = undefined,
}) => {
  setHeaders(res, headers);
  setAttachment(res, file);
  return response ? res.status(code).send(response) : res.status(code).end();
};

export const catchRequest = ({
  err, res, message = 'Server Error', internalCode = '9999',
}) => res.status((err && err.code) || 503).json([
  {
    internal_code: (err && err.internalCode) || internalCode,
    message: (err && err.message) || message,
  },
]);

export const rejectIfNotFound = (
  entity,
  name,
  internalCode,
) => (value) => value || Promise.reject(entityNotFound(entity, name, internalCode));

export const endRequestFunction = (info) => () => endRequest(info);
