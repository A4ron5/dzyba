import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '608c8ccfcc607c63abf75262bd89d33d';

const fetchWeather = async (city) => {
  const data = await axios.get(`${URL}${city}&units=metric&appid=${API_KEY}`);
  return data;
};

export default {
  fetchWeather,
};
