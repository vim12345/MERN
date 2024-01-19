// backend/src/models/FormSubmission.ts

import { Schema, model } from 'mongoose';

// Define the FormSubmission schema
const formSubmissionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  files: {
    type: [String], // Assuming file paths, you may adjust based on your use case
  },
  geolocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  selectedOptions: {
    type: [String],
  },
  submissionDate: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

// Create the FormSubmission model using the schema
const FormSubmission = model('FormSubmission', formSubmissionSchema);

export default FormSubmission;
