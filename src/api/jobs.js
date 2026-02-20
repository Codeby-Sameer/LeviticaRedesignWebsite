import api from "./axios";

export const getJobs = (params) => {
  return api.get("/jobs", { params });
};

export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

export const applyForJob = (jobId, formData) => {
  return api.post(`/jobs/${jobId}/apply`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
