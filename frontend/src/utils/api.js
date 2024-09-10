const API_URL = 'http://localhost:5000/api';

// Function to get the stored token
export const getToken = () => {
    return sessionStorage.getItem('authToken');
};

// Generic fetch wrapper to include Authorization header
export const fetchData = async (endpoint, method = 'GET', data = null) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    };

    const config = {
        method: method,
        headers: headers,
        body: data ? JSON.stringify(data) : null
    };

    if (method === 'GET') delete config.body;

    try {
        const response = await fetch(`${API_URL}/${endpoint}`, config);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
