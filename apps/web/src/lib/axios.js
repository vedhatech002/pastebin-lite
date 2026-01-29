import axios from "axios";
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});
// Response interceptor
axiosInstance.interceptors.response.use((response) => response, (error) => {
    const message = error.response?.data?.error || error.message || "Something went wrong";
    return Promise.reject(new Error(message));
});
export default axiosInstance;
