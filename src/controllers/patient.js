import { createNewPatient, getPatientById } from '../interactors/patient.js';

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
