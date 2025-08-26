import { useEffect, useState } from "react";
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../api/profileService";
import ProfileForm from "../components/ProfileForm";
import ProfileList from "../components/ProfileList";

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchProfiles = async () => {
    const data = await getProfiles();
    setProfiles(data);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleCreate = async (data) => {
    if (editing) {
      await updateProfile(editing._id, data);
      setEditing(null);
    } else {
      await createProfile(data);
    }
    fetchProfiles();
  };

  const handleDelete = async (id) => {
    await deleteProfile(id);
    fetchProfiles();
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Profile Manager</h1>
      <ProfileForm onSubmit={handleCreate} existingData={editing} />
      <ProfileList
        profiles={profiles}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </div>
  );
}
