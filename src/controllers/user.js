import { getUserByEmail, validateUserPassword } from '../interactors/user.js';

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  const isValidPassword = validateUserPassword(user.password, password);

  if (isValidPassword) {
    res.send(user);
  } else {
    res.send({ message: 'Invalid user or password', error: '1001' });
  }
};

export const createCenter = async (req, res) => {
  const { body } = req;
  res.send(body);
};
