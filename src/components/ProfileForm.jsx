import { useState, useEffect } from "react";

export default function ProfileForm({ onSubmit, existingData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: null,
  });

  useEffect(() => {
    if (existingData) {
      setForm({
        name: existingData.name || "",
        email: existingData.email || "",
        phone: existingData.phone || "",
        address: existingData.address || "",
        image: null,
      });
    }
  }, [existingData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", phone: "", address: "", image: null });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded-lg shadow-md bg-white space-y-3"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {existingData ? "Update Profile" : "Add Profile"}
      </button>
    </form>
  );
}
