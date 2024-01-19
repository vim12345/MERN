// backend/src/controllers/formController.ts

import { Request, Response } from 'express';
import FormSubmission from '../models/FormSubmission.ts'; // Import your FormSubmission model

const formController = {
  // Example endpoint for handling form submissions
  submitForm: async (req: Request, res: Response) => {
    try {
      // Extract form data from the request body
      const { name, email, phone, address, files, geolocation, selectedOptions } = req.body;

      // Create a new FormSubmission instance
      const newSubmission = new FormSubmission({
        name,
        email,
        phone,
        address,
        files,
        geolocation,
        selectedOptions,
        submissionDate: new Date(),
      });

      // Save the form submission to the database
      await newSubmission.save();

      // Respond with a success message
      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
      // Handle form submission error
      console.error('Form submission error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Example endpoint for retrieving form submissions
  getFormSubmissions: async (req: Request, res: Response) => {
    try {
      // Fetch all form submissions from the database
      const submissions = await FormSubmission.find();

      // Respond with the form submissions
      res.status(200).json({ submissions });
    } catch (error) {
      // Handle error while fetching form submissions
      console.error('Error fetching form submissions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

export default formController;
