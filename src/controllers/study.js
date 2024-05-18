import { addStudyForUser, getStudyById } from '../interactors/study.js';

export const getStudy = async (req, res) => {
  const { studyId } = req.params;
  const study = await getStudyById(studyId);
  res.send(study);
};

export const addStudy = async (req, res) => {
  const { userId } = req.params;
  const study = await addStudyForUser(userId, req.body);
  res.send(study);
};
