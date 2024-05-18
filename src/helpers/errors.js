import logger from '../logger.js';

export const swallowError = ({ err, message }) => {
  logger.error(message);
  logger.error(err);
  return Promise.resolve();
};

export const handleError = ({ err, message, code }) =>
  // eslint-disable-next-line prefer-promise-reject-errors
  Promise.reject({
    message,
    code,
    err
  });
