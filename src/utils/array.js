export const last = array => array.length && array[array.length - 1];

export const isArray = object => object?.constructor?.name === 'Array';

export const filterAndMap = (array, filterFunc, mapFunc, startItem) =>
  array.reduce(
    (accumItems, item) => (filterFunc(item) ? [...accumItems, mapFunc(item)] : accumItems),
    startItem
  );

export const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

export const hasDuplicates = array => new Set(array).size !== array.length;

export const removeElement = (array, func) => array.filter(func);

export const findByIdFromAnotherArray = (array, secondArray, atributeSecondArray, index) =>
  array.find(element => element.id.toString() === secondArray[index][atributeSecondArray].toString());

export const removeDuplicates = array => [...new Set(array)];
