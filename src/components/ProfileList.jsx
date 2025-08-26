export default function ProfileList({ profiles, onEdit, onDelete }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {profiles.map((profile) => (
        <div
          key={profile._id}
          className="border rounded-lg p-4 shadow-md bg-white"
        >
          {profile.image && (
            <img
              src={`http://localhost:5000/${profile.image}`}
              alt={profile.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
          <p>{profile.address}</p>

          <div className="flex gap-2 mt-3">
            <button
              onClick={() => onEdit(profile)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(profile._id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
