import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': 'fd1bef08femshdf2989afdc84c0cp1a4e87jsn70b68507ed9e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
