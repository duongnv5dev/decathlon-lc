import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_ADDRESS}`,
});

axiosClient.interceptors.request.use(async (config) => {
  // TODO: inject token
  return config;
});

export default axiosClient;
