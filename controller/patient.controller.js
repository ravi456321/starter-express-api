// Importing Patient model
import Patient from "../models/patientModel.js";

export default class PatientController {
  async register(req, res) {
    try {
      const { phoneNumber } = req.body;

      // Check if the patient already exists
      let patient = await Patient.findOne({ phoneNumber });
      if (patient) {
        return res.status(200).json({ message: 'Patient already exists', patient });
      }

      // Create a new patient
      patient = new Patient({ phoneNumber });
      await patient.save();

      res.status(201).json({ message: 'Patient registered successfully', patient });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
