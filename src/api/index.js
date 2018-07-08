import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '608c8ccfcc607c63abf75262bd89d33d';

const fetchWeather = (city) => {
  return axios.get(`${URL}${city}&appid=${API_KEY}`);
};

export default {
  fetchWeather,
};
