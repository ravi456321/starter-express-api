import DoctorRepository from '../repositories/doctor.repository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default class DoctorController {
  async register(req, res) {
    try {
      const { username, password } = req.body;
      const existingDoctor = await DoctorRepository.findDoctorByUsername(username);
      if (existingDoctor) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
      const newDoctor = await DoctorRepository.createDoctor(username, hashedPassword);
      res.status(201).json({ message: 'Doctor registered successfully', newDoctor });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const doctor = await DoctorRepository.findDoctorByUsername(username);

      if (!doctor) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const match = await bcrypt.compare(password, doctor.password);
      if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const jwtToken = jwt.sign({ id: doctor._id }, 'sdfguibn', { expiresIn: '1h' });
      res.cookie('jwtToken', jwtToken, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });
      res.status(200).json({ jwtToken });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
