import { mapPatient } from '../mappers/patient.js';
import Patient from '../models/patient.model.js';

export const getPatientById = async (studyId) => Patient.findById(studyId);

export const createNewPatient = async (patient) => {
  const newPatient = await Patient.create(mapPatient(patient));
  return newPatient;
};
