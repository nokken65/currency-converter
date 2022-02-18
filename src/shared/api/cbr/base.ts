import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/',
});
