/* eslint-disable max-len */
const fs = require('fs');

const db = require('./db.json');

const DB_FILE_PATH = './controllers/db.json';

const getStudyById = (studyId) => db.flatMap((usuario) => usuario.studies).find((estudio) => estudio.id.toString() === studyId.toString());

const addStudyForUser = (userId, study) => {
  const data = fs.readFileSync(DB_FILE_PATH, 'utf8');
  const users = JSON.parse(data);

  const id = (Math.floor(Math.random() * 1000) + 1).toString();
  const newStudy = { ...study, id };

  const updatedDb = users.map((usuario) => (usuario.id.toString() !== userId.toString()
    ? usuario
    : { ...usuario, studies: [...usuario.studies, newStudy] }));

  fs.writeFileSync(DB_FILE_PATH, JSON.stringify(updatedDb));

  return newStudy;
};

module.exports = { getStudyById, addStudyForUser };
