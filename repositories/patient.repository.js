import Patient from '../models/patientModel.js';

const PatientRepository = {
  async createPatient(phoneNumber) {
    const newPatient = new Patient({ phoneNumber });
    await newPatient.save();
    return newPatient;
  },

  async findPatientByPhoneNumber(phoneNumber) {
    return await Patient.findOne({ phoneNumber });
  }
};

export default PatientRepository;
