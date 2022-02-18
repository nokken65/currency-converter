import { apiInstance } from './base';

export const getRates = () => {
  return apiInstance.get('daily_utf8.xml');
};
