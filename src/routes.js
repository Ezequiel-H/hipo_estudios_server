import { addStudy, getStudy } from './controllers/study.js';
import {
  createPatient, getAllStudies, getPatient, patientProfesionalConnection,
} from './controllers/patient.js';
import { createProfessional, getAllPatients, getProfessional } from './controllers/professional.js';
import { createCenter, getCenter } from './controllers/center.js';
import { createUser, signIn } from './controllers/user.js';

export default (app) => {
  // WEB APP
  app.get('/', (_, res) => res.send('Hello World!'));
  app.get('/health', (_, res) => res.send('OK'));

  // USER
  app.post('/sign_in', signIn);
  app.post('/sign_up', createUser);

  // PATIENT
  app.get('/patient/:patientId', getPatient);
  app.post('/patient/', createPatient);
  app.post('/patient/:patientId/addProfessional', patientProfesionalConnection);
  app.get('/patient/:patientId/studies', getAllStudies);

  // PROFESSIONAL
  app.get('/professional/:professionalId', getProfessional);
  app.post('/professional/', createProfessional);
  app.get('/professional/:professionalId/patients', getAllPatients);

  // STUDY
  app.get('/study/:studyId', getStudy);
  app.post('/study/:userId', addStudy);

  // CENTER
  app.get('/center/:centerId', getCenter);
  app.post('/center/', createCenter);
};
