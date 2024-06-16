import { USER_TYPES } from '../constants/user.js';
import { createNewCenter } from '../interactors/center.js';
import { createNewPatient } from '../interactors/patient.js';
import { createNewProfessional } from '../interactors/professional.js';
import { getUserByEmail, validateUserPassword } from '../interactors/user.js';

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  const isValidPassword = validateUserPassword(user.password, password);

  if (isValidPassword) {
    res.send(user);
  } else {
    res.status(401).json({
      error: 'Invalid user or password',
      code: '1001',
    });
  }
};

export const createCenter = async (req, res) => {
  const { body } = req;
  res.send(body);
};

const creatingUserByRole = {
  [USER_TYPES.CENTER]: createNewCenter,
  [USER_TYPES.PATIENT]: createNewPatient,
  [USER_TYPES.PROFESSIONAL]: createNewProfessional,
};

export const createUser = async (req, res) => {
  const {
    email,
    role,
  } = req.body;

  const emailUser = await getUserByEmail(email);

  if (emailUser) {
    res.status(409).json({
      error: 'User allready created for this email',
      code: '1003',
    });
    return;
  }

  if (!Object.values(USER_TYPES).includes(role)) {
    res.status(400).json({
      error: 'Invalid user role',
      code: '1004',
    });
    return;
  }

  const newUser = await creatingUserByRole[role](req.body);
  res.send(newUser);
};
