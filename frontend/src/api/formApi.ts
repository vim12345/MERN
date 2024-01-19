// frontend/src/api/formApi.ts

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual backend API base URL

// Function to get form submissions
export const getFormSubmissions = async (): Promise<any> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/forms/submissions`);
    return response.data;
  } catch (error) {
    // Handle error (e.g., log it or show a user-friendly message)
    console.error('Error fetching form submissions:', error);
    throw error;
  }
};
