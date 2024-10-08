// import axios from 'axios'
// const api = () => {
//   axios.defaults.baseURL = "http://localhost:19003  /api";
//   axios.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem('psg_auth_token')
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//       }
//       return config
//     },
//     (error) => {
//       return Promise.reject(error)
//     }
//   )
// }
// export default api;

import axios from "axios";

const api = axios.create({
    baseURL: "http://0.0.0.0:19003//api/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default api;