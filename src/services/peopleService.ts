import axios from 'axios';

const API_URL = 'https://api.json-generator.com/templates/-xdNcNKYtTFG/data';
const API_KEY = 'b2atclr0nk1po45amg305meheqf4xrjt9a1bo410';

export const listPeople = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};
