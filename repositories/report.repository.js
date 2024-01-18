import Report from '../models/reportModel.js';

const ReportRepository = {
  async createReport(doctorId, patientId, status) {
    const newReport = new Report({
      createdBy: doctorId,
      status,
      patient: patientId,
      date: new Date(),
    });
    await newReport.save();
    return newReport;
  },

  async findReportsByPatientId(patientId) {
    return await Report.find({ patient: patientId }).sort({ date: 1 });
  },

  async findReportsByStatus(status) {
    return await Report.find({ status });
  }
};

export default ReportRepository;
