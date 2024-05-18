/* eslint-disable import/prefer-default-export */

import { composeMethods } from './functions.js';

export const composePromises = composeMethods('then');

const promiseNoReject = p =>
  p.then(
    r => ({
      r,
      success: true
    }),
    e => ({
      e,
      status: false
    })
  );

export const executeSecuentialPromises = promiseArray =>
  promiseArray
    .map(promiseNoReject)
    .reduce(
      (promiseChain, currentTask) =>
        promiseChain.then(chainResults =>
          currentTask.then(currentResult => [...chainResults, currentResult])
        ),
      Promise.resolve([])
    );
