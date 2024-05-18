export const composeMethods = method => functions =>
  functions.reduce((aFunction, anotherFunction) => x => aFunction(x)[method](anotherFunction));

export const executeNTimes = method => (n, func) => [...Array(n).keys()][method](item => func(item));

export const doNTimes = executeNTimes('forEach');

export const returnNMappedItems = executeNTimes('map');

export const reduceNItems = executeNTimes('reduce');
