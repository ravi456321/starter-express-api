# Hospital API for COVID-19 Management

This Hospital API is designed for the management of COVID-19 patients and doctor interactions. It provides functionalities for registering patients, creating reports, and managing doctor authentication.

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)

## Introduction

This API serves as a platform for doctors to manage COVID-19 patients allocated for testing, quarantine, and treatment. It allows doctors to register, log in, register patients, create patient reports, and retrieve patient reports based on their status.

## Tech Stack

- Node.js
- MongoDB
- Express.js

## Features

- Doctor authentication with JWT
- Patient registration
- Creating patient reports by doctors
- Retrieving patient reports by ID and status

## Folder Structure
hospital-api/  
│  
├── models/  
│ ├── doctorModel.js    
│ ├── patientModel.js  
│ └── reportModel.js  
│  
├── controllers/  
│ ├── doctorController.js  
│ ├── patientController.js  
│ └── reportController.js  
│  
├── routes/  
│ ├── doctorRoutes.js  
│ ├── patientRoutes.js  
│ └── reportRoutes.js  
│  
└── config/  
|  └── db.js


- **models/**: Contains MongoDB schemas for Doctor, Patient, and Report.
- **controllers/**: Contains logic for handling API requests and interacting with the database.
- **routes/**: Defines API endpoints for doctors, patients, and reports.
- **config/**: Includes the database connection setup.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ravi1104/hospital-api.git
Access the API at http://localhost:4000.

API Endpoints  
- POST /doctors/register: Register a new doctor.
- POST /doctors/login: Authenticate and log in a doctor, returns a JWT.
- POST /patients/register: Register a new patient.
- POST /patients/:id/create_report: Create a report for a patient by ID.
- GET /patients/:id/all_reports: Get all reports of a patient by ID.
- GET /reports/:status: Get reports of all patients filtered by status.  
  
Authentication  
Doctor routes (/doctors/*) are protected by JWT authentication.  

[Youtube Video Link](https://www.youtube.com/watch?v=tPXPJznhD-4)
