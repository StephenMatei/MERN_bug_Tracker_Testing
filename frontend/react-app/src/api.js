import axios from 'axios';

const API_URL = 'http://localhost:5000/bugs';

export const fetchBugs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBug = async (bug) => {
    const response = await axios.post(API_URL, bug);
    return response.data;
};

export const updateBug = async (id, status) => {
    const response = await axios.put(`${API_URL}/${id}`, { status });
    return response.data;
};

export const deleteBug = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
