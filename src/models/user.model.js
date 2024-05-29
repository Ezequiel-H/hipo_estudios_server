import mongoose from 'mongoose';
import { USER_TYPES } from '../constants/user.js';

const { Schema } = mongoose;

const userBaseSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String },
  birthdate: { type: Date },
  country: { type: String },
  last_conn: { type: String },
  token: { type: String },
  phone: { type: String, required: true },
  userType: {
    type: String,
    enum: Object.values(USER_TYPES),
    required: true,
  },
}, { discriminatorKey: 'userType', timestamps: true });

export default mongoose.model('User', userBaseSchema);
