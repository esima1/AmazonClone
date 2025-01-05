import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-42855/us-central1/api",
  baseURL: "https://api-45nv5owefa-uc.a.run.app",
});

export {axiosInstance}