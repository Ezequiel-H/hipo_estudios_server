import { mapStudy } from '../mappers/study.js';
import Study from '../models/study.model.js';
import Patient from '../models/patient.model.js';

export const getStudyById = async (studyId) => Study.findById(studyId);

export const addStudyForUser = async (userId, studyWithNoPatient) => {
  const newStudy = await Study.create(mapStudy({ ...studyWithNoPatient, patient: userId }));
  await Patient.findOneAndUpdate(
    { _id: userId },
    { $push: { studies: newStudy._id } },
  );

  return newStudy;
};
