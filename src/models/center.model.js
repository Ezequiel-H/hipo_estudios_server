import mongoose from 'mongoose';

const { Schema } = mongoose;

const centerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    address_details: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phones: [{
      detail: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    }],

    studies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Study',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Center', centerSchema);
