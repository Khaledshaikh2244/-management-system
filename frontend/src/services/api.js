// const axios = require('axios'); 
import axios from 'axios';

const API_URL = 'http://local:5000/api';


// here we will have product  api
export const getProducts = () => axios.get(`${API_URL}/products`); 
export const addProduct = (product) => axios.post(`${API_URL}/product`,product);
export const updateProduct = (id, product) => axios.put(`${API_URL}/product/${id}`,product);



// no w here users api
export const getUsers = () => axios.get(`${API_URL}/usres`);
export const addUser = (user) => axios.post(`${API_URL}/users`,user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);