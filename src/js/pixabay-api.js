import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '51328108-e5351328d4cc0773f2b3617f5';

// оголошення функції
// кажемо axios, сходи за ось цим посиланням (URL) і візьми з собою ці параметри (params)
export const getImagesByQuery = async query => {
  const response = await axios.get(URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
};
