import mongoose from 'mongoose';
import User from './user.model.js';

const { Schema } = mongoose;

const patientSchema = new Schema({
  os: { type: String, required: true },
  numeroAfiliado: { type: String, required: true },
  studies: [{ type: Schema.Types.ObjectId, ref: 'Study' }],
});

export default User.discriminator('patient', patientSchema);
