import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
