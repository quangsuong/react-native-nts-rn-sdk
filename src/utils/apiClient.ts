// import axios, { AxiosInstance } from 'axios';
//
// // Create an Axios instance
// const apiClient: AxiosInstance = axios.create({
//   baseURL: 'https://api.example.com', // Replace with your API base URL
//   timeout: 10000, // Set a timeout for requests
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
//
// // Add request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Optionally add an authorization token to requests
//     const token = ''; // Fetch token from AsyncStorage or your auth context
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );
//
// // Add response interceptor
// apiClient.interceptors.response.use(
//   (response) => {
//     // Handle successful responses
//     return response.data;
//   },
//   (error) => {
//     // Handle errors globally
//     console.error('API Error:', error.response || error.message);
//     return Promise.reject(error);
//   }
// );
const apiClient = () => {};

export default apiClient;
