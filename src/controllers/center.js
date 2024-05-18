import { createNewCenter, getCenterById } from '../interactors/center.js';

export const getCenter = async (req, res) => {
  const { userId } = req.params;
  const user = await getCenterById(userId);
  res.send(user);
};

export const createCenter = async (req, res) => {
  const { body } = req;
  const newCenter = await createNewCenter(body);
  res.send(newCenter);
};
