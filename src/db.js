import mongooseLib from 'mongoose';

export const mongoose = mongooseLib;

export const initDatabase = () => {
  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hipo-estudios-db.7k23eff.mongodb.net/?retryWrites=true&w=majority&appName=hipo-estudios-db`);
  return mongoose;
};

export const schema = mongoose.Schema;
