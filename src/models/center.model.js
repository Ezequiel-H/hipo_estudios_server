import mongoose from 'mongoose';
import User from './user.model.js';

const { Schema } = mongoose;

const centerSchema = new Schema({
  address: { type: String, required: true },
  number: { type: Number, required: true },
  address_details: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  phones: [{
    detail: { type: String, required: true },
    phone: { type: String, required: true },
  }],
  patients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  professionals: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default User.discriminator('center', centerSchema);
