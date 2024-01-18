import ReportRepository from "../repositories/report.repository.js";

export default class ReportController {
  async createReport(req, res) {
    try {
      const { id } = req.params; // Patient ID
      const { createdBy, status } = req.body;

      const newReport = await ReportRepository.createReport(createdBy, id, status);
      res.status(201).json({ message: 'Report created successfully', newReport });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAllReports(req, res) {
    try {
      const { id } = req.params; // Patient ID

      const patientReports = await ReportRepository.findReportsByPatientId(id);

      res.status(200).json({ reports: patientReports });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getReportsByStatus(req, res) {
    try {
      const { status } = req.params;

      const reportsByStatus = await ReportRepository.findReportsByStatus(status);

      res.status(200).json({ reports: reportsByStatus });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}