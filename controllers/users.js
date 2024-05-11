const db = require('./db.json');

const getUserById = (userId) => db.find((user) => user.id.toString() === userId.toString());

const getUserByI = (userId) => {
  const datos = JSON.parse(db);
  return datos.find((user) => user.id.toString() === userId.toString());
};

module.exports = { getUserById, getUserByI };
