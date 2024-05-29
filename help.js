const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true },
  profile: {
    professional: {
      professionalSpecificAttribute: String,
    },
    patient: {
      patientSpecificAttribute: String,
    },
    center: {
      centerSpecificAttribute: String,
    },
  },
});

const listaDeUsuarios = [
  {
    _id: "ObjectId('...')",
    email: 'admin@example.com',
    password: 'hashed_password',
    userType: 'professional',
    profile: {
      professional: {
        professionalSpecificAttribute: 'value',
      },
    },
  },
  {
    _id: "ObjectId('...')",
    email: 'editor@example.com',
    password: 'hashed_password',
    userType: 'patient',
    profile: {
      patient: {
        patientSpecificAttribute: 'value',
      },
    },
  },
];
