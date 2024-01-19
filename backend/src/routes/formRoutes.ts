// backend/src/routes/formRoutes.ts

import express from 'express';
import formController from '../controllers/formController'; // Import your formController

const router = express.Router();

// Example route for submitting a form
router.post('/submit', formController.submitForm);

// Example route for retrieving form submissions
router.get('/submissions', formController.getFormSubmissions);

// Add more form-related routes as needed

export default router;
