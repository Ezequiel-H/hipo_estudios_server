import mongoose from 'mongoose';
import { STUDY_TYPES } from '../constants/study.js';

const { Schema } = mongoose;

const studySchema = new Schema({
  type: {
    type: String,
    enum: Object.values(STUDY_TYPES),
    default: STUDY_TYPES.AUDIOGRAM,
  },
  result: {
    type: Schema.Types.Mixed,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  observation: {
    type: String,
    required: true,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  professional: {
    type: Schema.Types.ObjectId,
    ref: 'Professional',
  },
  center: {
    type: Schema.Types.ObjectId,
    ref: 'Center',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Study', studySchema);
