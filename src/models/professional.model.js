import mongoose from 'mongoose';
import User from './user.model.js';

const { Schema } = mongoose;

const professionalSchema = new Schema({
  matriculas: [{ type: String, matricula: String }],
  centers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  patients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default User.discriminator('professional', professionalSchema);
