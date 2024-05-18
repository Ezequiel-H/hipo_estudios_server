import { changeField } from './object.js';

export const changeFieldAndSave = (object, fieldName, newValue) => {
  changeField(object, fieldName, newValue);
  return object.save();
};

export const sameId = (entity1, entity2) => entity1._id.toString() === entity2._id.toString();
