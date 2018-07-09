import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '';

const fetchWeather = async (city) => {
  const data = await axios.get(`${URL}${city}&units=metric&appid=${API_KEY}`);
  return data;
};

export default {
  fetchWeather,
};
