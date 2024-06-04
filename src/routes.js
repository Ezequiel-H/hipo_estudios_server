import { addStudy, getStudy } from './controllers/study.js';
import { addProfessionalToUser, createPatient, getPatient } from './controllers/patient.js';
import { createProfessional, getProfessional } from './controllers/professional.js';
import { createCenter, getCenter } from './controllers/center.js';

export default (app) => {
  // WEB APP
  app.get('/', (_, res) => res.send('Hello World!'));
  app.get('/health', (_, res) => res.send('OK'));

  // PATIENT
  app.get('/patient/:userId', getPatient);
  app.post('/patient/', createPatient);
  app.post('/patient/:userId/addProfessional', addProfessionalToUser);

  // PROFESSIONAL
  app.get('/professional/:userId', getProfessional);
  app.post('/professional/', createProfessional);

  // STUDY
  app.get('/study/:studyId', getStudy);
  app.post('/study/:userId', addStudy);

  // CENTER
  app.get('/center/:centerId', getCenter);
  app.post('/center/', createCenter);
};
