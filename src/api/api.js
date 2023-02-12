import axios from 'axios';

export const api = (method, endpoint) => {
  return axios({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method,
    url: endpoint,
  });
};
