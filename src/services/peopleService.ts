const API_URL = 'https://api.json-generator.com/templates/-xdNcNKYtTFG/data';
const API_KEY = 'b2atclr0nk1po45amg305meheqf4xrjt9a1bo410';

export const listPeople = async () => {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_KEY}`
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch people');
    }

    return response.json();
};
