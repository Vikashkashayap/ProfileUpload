// src/api/formService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/forms";

// Create new form entry
export const createForm = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error creating form:", error);
    throw error;
  }
};

// Get all form entries
export const getForms = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching forms:", error);
    throw error;
  }
};

// Delete a form entry
export const deleteForm = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting form:", error);
    throw error;
  }
};

// Update a form entry
export const updateForm = async (id, formData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, formData);
    return response.data;
  } catch (error) {
    console.error("Error updating form:", error);
    throw error;
  }
};
