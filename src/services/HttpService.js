import axios from 'axios';
import config from '../config/config';
// import store from "../state/store";
// import router from "../router";

const HttpService = axios.create({
  baseURL: config.ROOT_URL,
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
