import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

import DoctorController from './controllers/doctor.controller.js';
import PatientController from './controllers/patient.controller.js';
import ReportController from './controllers/report.controller.js';
import jwtAuth from './middleware/auth.js';


// Middleware
app.use(express.json());
app.use(cookieParser());


// Doctor Routes
const doctorController=new DoctorController();
const patientController=new PatientController();
const reportController=new ReportController();
app.post('/api/doctors/register', doctorController.register);
app.post('/api/doctors/login', doctorController.login);


// Patient Routes
app.post('/api/patients/register', jwtAuth,patientController.register);
app.post('/api/patients/:id/create_report',jwtAuth, reportController.createReport);
app.get('/api/patients/:id/all_reports', reportController.getAllReports);

// Report Routes
app.get('/api/reports/:status', reportController.getReportsByStatus);

// Catch-all route for invalid URLs
app.get('*', (req, res) => {
    res.send('Invalid URL');
});

export default app;
