// src/components/FormInput.jsx
import { useState } from "react";
import { createForm } from "../api/formService";

export default function FormInput({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newForm = await createForm(formData);
      onFormSubmit(newForm); // update parent
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md w-80 bg-white">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <textarea
        name="message"
        placeholder="Enter message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
