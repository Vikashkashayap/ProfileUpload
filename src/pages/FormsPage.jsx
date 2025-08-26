// src/pages/FormsPage.jsx
import { useEffect, useState } from "react";
import { getForms } from "../api/formService";
import FormInput from "../components/FormInput";
import FormList from "../components/FormList";

export default function FormsPage() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    const data = await getForms();
    setForms(data);
  };

  const handleFormSubmit = (newForm) => {
    setForms([newForm, ...forms]); // add new form on top
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Forms</h1>
      <FormInput onFormSubmit={handleFormSubmit} />
      <FormList forms={forms} onUpdate={fetchForms} />
    </div>
  );
}
