// src/components/FormList.jsx
import { useState } from 'react';
import { deleteForm, updateForm } from '../api/formService';

export default function FormList({ forms, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleDelete = async (id) => {
    try {
      await deleteForm(id);
      onUpdate(); // Refresh the list
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  const handleEdit = (form) => {
    setEditingId(form._id);
    setEditForm(form);
  };

  const handleUpdate = async () => {
    try {
      await updateForm(editingId, editForm);
      setEditingId(null);
      onUpdate(); // Refresh the list
    } catch (error) {
      console.error('Error updating form:', error);
    }
  };

  const handleChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Submitted Forms</h2>
      <ul>
        {forms.map((form) => (
          <li key={form._id} className="border p-4 mb-2 rounded">
            {editingId === form._id ? (
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
                <textarea
                  name="message"
                  value={editForm.message}
                  onChange={handleChange}
                  className="border p-1 rounded w-full"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdate}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Message:</strong> {form.message}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(form)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(form._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
