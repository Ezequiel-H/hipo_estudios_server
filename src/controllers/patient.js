import { connectPatientToProfessional, createNewPatient, getPatientById } from '../interactors/patient.js';
import { getProfessionalByEmail } from '../interactors/professional.js';

export const getPatient = async (req, res) => {
  const { patientId } = req.params;
  const patient = await getPatientById(patientId);
  if (!patient) {
    res.status(404).json({
      error: 'Patient not found',
      code: '1006',
    });
  }
  res.send(patient);
};

export const createPatient = async (req, res) => {
  const { body } = req;
  const newPatient = await createNewPatient(body);
  res.send(newPatient);
};

export const patientProfesionalConnection = async (req, res) => {
  const { professionalEmail } = req.body;
  const { patientId } = req.params;

  const professional = await getProfessionalByEmail(professionalEmail);

  if (!professional?._id) {
    res.status(404).json({
      error: `Couldn't find professional with email: ${professionalEmail}`,
      code: '1004',
    });
  }

  const response = await connectPatientToProfessional(patientId, professional._id);

  if (!response.updatedPatient) {
    res.status(400).json({
      error: "Couldn't add professional",
      code: '1000',
    });
  }
  res.send(response.updatedPatient);
};

export const getAllStudies = async (req, res) => {
  const { patientId } = req.params;

  const patient = await getPatientById(patientId);

  if (!patient) {
    res.status(404).json({
      error: "Couldn't find patient",
      code: '1001',
    });
  }
  res.send(patient.studies);
};
