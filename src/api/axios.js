import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


// ================================
// REQUEST INTERCEPTOR
// ================================

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// ================================
// RESPONSE INTERCEPTOR
// ================================

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized. Redirect to login.");
      // optional: redirect logic
    }

    return Promise.reject(error);
  }
);

export default api;
