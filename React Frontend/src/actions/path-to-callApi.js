import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Adjust this URL as needed

const callApi = async (url, method, body = {}, headers = {}) => {
  try {
    const response = await axios({
      method,
      url: `${API_BASE_URL}${url}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default callApi;
