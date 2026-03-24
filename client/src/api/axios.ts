import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

// Normalise errors: extract the message from API response body
api.interceptors.response.use(
  (res) => res,
  (err: unknown) => {
    const error = err as { response?: { data?: { message?: string } }; message?: string };
    const message = error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default api;
