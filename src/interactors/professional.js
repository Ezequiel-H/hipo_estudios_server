/* eslint-disable max-len */
import { mapProfessional } from '../mappers/professional.js';
import Professional from '../models/professional.model.js';

export const getProfessionalById = async (userId) => Professional.findById(userId);
export const getProfessionalByEmail = async (professionalEmail) => Professional.findOne({ email: professionalEmail });

export const createNewProfessional = async (professional) => {
  const newProfessional = await Professional.create(mapProfessional(professional));
  return newProfessional;
};
