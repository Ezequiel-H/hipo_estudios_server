import { createNewProfessional, getProfessionalById } from '../interactors/professional.js';

export const getProfessional = async (req, res) => {
  const { userId } = req.params;
  const user = await getProfessionalById(userId);
  res.send(user);
};

export const createProfessional = async (req, res) => {
  const { body } = req;
  const newProfessional = await createNewProfessional(body);
  res.send(newProfessional);
};
