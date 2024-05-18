import mongoose from 'mongoose';

const { Schema } = mongoose;

const patientSchema = new Schema({
  name: {
    type: String, required: true,
  },
  surname: {
    type: String, required: true,
  },
  birthdate: {
    type: Date, required: true,
  },
  os: {
    type: String, required: true,
  },
  numeroAfiliado: {
    type: String, required: true,
  },
  studies: [{
    type: Schema.Types.ObjectId,
    ref: 'Study',
  }],
}, {
  timestamps: true,
});

export default mongoose.model('Patient', patientSchema);
