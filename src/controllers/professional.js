import { createNewProfessional, getProfessionalById, getAllPatientsWithInfo } from '../interactors/professional.js';

export const getProfessional = async (req, res) => {
  const { professionalId } = req.params;
  const professional = await getProfessionalById(professionalId);
  if (!professional) {
    res.status(404).json({
      error: "Couldn't find professional",
      code: '1004',
    });
  }
  res.send(professional);
};

export const createProfessional = async (req, res) => {
  const { body } = req;
  const newProfessional = await createNewProfessional(body);
  res.send(newProfessional);
};

export const getAllPatients = async (req, res) => {
  const { professionalId } = req.params;

  const professional = await getProfessionalById(professionalId);

  if (!professional) {
    res.status(404).json({
      error: "Couldn't find professional",
      code: '1002',
    });
  }

  res.send(professional.patients);
};

export const getAllPatientsWithInformation = async (req, res) => {
    const { professionalId } = req.params;

  const professional = await getAllPatientsWithInfo(professionalId);

  if (!professional) {
    res.status(404).json({
      error: "Couldn't find professional",
      code: '1002',
    });
  }

  res.send(professional.patients);

}