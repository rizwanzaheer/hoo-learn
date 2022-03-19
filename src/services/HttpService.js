import axios from 'axios';
// import store from "../state/store";
// import router from "../router";

const HttpService = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000,
  // withCredentials: true
});

HttpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {}
);

export default HttpService;
