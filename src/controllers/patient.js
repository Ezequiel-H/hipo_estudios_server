import { connectPatientToProfessional, createNewPatient, getPatientById } from '../interactors/patient.js';
import { getProfessionalByEmail } from '../interactors/professional.js';

export const getPatient = async (req, res) => {
  const { userId } = req.params;
  const user = await getPatientById(userId);
  res.send(user);
};

export const createPatient = async (req, res) => {
  const { body } = req;
  const newPatient = await createNewPatient(body);
  res.send(newPatient);
};

export const patientProfesionalConnection = async (req, res) => {
  const { professionalEmail } = req.body;
  const { userId: patientId } = req.params;

  const { _id: professionalId } = await getProfessionalByEmail(professionalEmail);
  const response = await connectPatientToProfessional(patientId, professionalId);

  if (response.updatedPatient) {
    res.send(response.updatedPatient);
  } else {
    res.send({ message: "Couldn't add professional", errorCode: '1000' });
  }
};
