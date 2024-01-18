import Doctor from '../models/doctorModel.js';

const DoctorRepository = {
  async createDoctor(username, password) {
    const newDoctor = new Doctor({ username, password });
    await newDoctor.save();
    return newDoctor;
  },

  async findDoctorByUsername(username) {
    return await Doctor.findOne({ username });
  }
};

export default DoctorRepository;
