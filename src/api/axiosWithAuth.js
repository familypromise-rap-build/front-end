import axios from 'axios';
const environment = process.env.ENV || 'development';

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('okta-token-storage'))?.idToken
    ?.value;
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: process.env.REACT_APP_API_URI,
  });
};