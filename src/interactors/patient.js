import mongoose from 'mongoose';
import { mapPatient } from '../mappers/patient.js';
import Patient from '../models/patient.model.js';
import Professional from '../models/professional.model.js';

export const getPatientById = async (patientId) => Patient.findById(patientId);
export const getPatientWithStudies = async (patientId) => Patient.findById(patientId).populate('studies');

export const createNewPatient = async (patient) => {
  const newPatient = await Patient.create(mapPatient(patient));
  return newPatient;
};

export const connectPatientToProfessional = async (patientId, professionalId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      { $push: { professionals: professionalId } },
      { new: true, session },
    );

    const updatedDoctor = await Professional.findByIdAndUpdate(
      professionalId,
      { $push: { patients: patientId } },
      { new: true, session },
    );

    await session.commitTransaction();
    session.endSession();

    return { updatedPatient, updatedDoctor };
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error(err);
    throw err;
  }
};
