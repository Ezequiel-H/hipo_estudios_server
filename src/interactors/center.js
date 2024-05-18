import { mapCenter } from '../mappers/center.js';
import Center from '../models/center.model.js';

export const getCenterById = async (userId) => Center.findById(userId);

export const createNewCenter = async (center) => {
  const newCenter = await Center.create(mapCenter(center));
  return newCenter;
};
