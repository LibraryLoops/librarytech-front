import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

// api.interceptors.request.use(function (config) {
//     const token = useObterToken()
//     if(token && config.headers) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config;
//   }, function (error) {
//     console.log('Erro no interceptador do axios.')
//     return Promise.reject(error);
//   });

export default api;