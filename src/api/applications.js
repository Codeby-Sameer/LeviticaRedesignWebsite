import api from "./axios";


// GET Applications (pagination + filter)
export const getApplications = (params) => {
  return api.get("/applications", { params });
};


// GET Stats
export const getApplicationStats = () => {
  return api.get("/applications/stats");
};


// Update Status
export const updateApplicationStatus = (id, status) => {
  return api.put(`/applications/${id}/status`, { status });
};


// Delete Application (soft delete)
export const deleteApplication = (id) => {
  return api.delete(`/applications/${id}`);
};


// Download Resume
export const downloadResume = (id) => {
  return api.get(`/applications/${id}/resume`, {
    responseType: "blob",
  });
};
