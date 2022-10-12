import axios from "axios";

const api = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default api;
