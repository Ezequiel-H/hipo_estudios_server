import { createNewCenter, getCenterById } from '../interactors/center.js';

export const getCenter = async (req, res) => {
  const { userId } = req.params;
  const center = await getCenterById(userId);
  if (!center) {
    res.status(404).json({
      error: 'Center not found',
      code: '1005',
    });
  }
  res.send(center);
};

export const createCenter = async (req, res) => {
  const { body } = req;
  const newCenter = await createNewCenter(body);
  res.send(newCenter);
};
