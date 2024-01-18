import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true,'username must not be empty'],
  },
  password: {
    type: String,
    required: [true,'password field is required'],
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;
