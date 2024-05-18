/* eslint-disable import/prefer-default-export */

export const includes = (arr1, arr2) => arr1.every(element => arr2.includes(element));

export const isArray = object => object?.constructor?.name === 'Array';

export const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

export const getArrayOfNumbers = count => Array.from({ length: count }, (_, i) => i + 1);
