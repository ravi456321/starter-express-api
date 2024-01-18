import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  status: {
    type: String,
    enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
