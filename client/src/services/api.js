import axios from 'axios';

const API_URL = 'https://musical-guide-577xxwq64g9fvxwv-5000.app.github.dev';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const addUser = (user) => axios.post(`${API_URL}/users/signup`, user);

export const getCreations = () => axios.get(`${API_URL}/creations`);
export const addCreation = (creation) => axios.post(`${API_URL}/creations/add`, creation);