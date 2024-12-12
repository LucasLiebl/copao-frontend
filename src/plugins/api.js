import axios from "axios";
import { useAuthStore } from "../stores/auth";

const api = axios.create({
    baseURL: "http://localhost:19003/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 100000,
});

  
export function setupInterceptors() {
    const authStore = useAuthStore()
  
    api.interceptors.request.use((config) => {
      if (authStore.state.token) {
        config.headers.Authorization = `Bearer ${authStore.state.token}`
      }
      return config
    })
  }
export default api;


// axios.defaults.baseURL = 'http://0.0.0.0:19003/api'


// axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );