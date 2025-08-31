import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 7000,
  /* headers: {
    "Content-Type": "application/json", 
 Authorization: `Bearer ${localStorage.getItem("token")}`,
  }, */
});


  api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
