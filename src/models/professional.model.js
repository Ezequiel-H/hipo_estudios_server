import mongoose from 'mongoose';

const { Schema } = mongoose;

const professionalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  matriculas: [{ type: String, matricula: String }],
  // centers: [],
}, {
  timestamps: true,
});

export default mongoose.model('Professional', professionalSchema);
