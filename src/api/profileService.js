const API_URL = "http://localhost:5000/api/profiles";

export async function getProfiles() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getProfile(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createProfile(data) {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }

  const res = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export async function updateProfile(id, data) {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });
  return res.json();
}

export async function deleteProfile(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return res.json();
}
