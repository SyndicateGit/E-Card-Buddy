import axios from 'axios';

const axiosInstance = (contentType = 'application/json') => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api/'}`,
    headers: {
      'Content-Type': contentType,
      Authorization: `Bearer ${localStorage.getItem('ECardBuddy jwt')}`,
    },
  });
};

export default axiosInstance;
