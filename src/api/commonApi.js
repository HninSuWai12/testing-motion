import axios from "axios";

const API = axios.create({
  baseURL: 'https://dummyjson.com'
});

export const getapiList = async () => {
  try {
    const response = await API.get('/carts'); 
    // The structure is { carts: [...], total: 50, ... }
    return response.data.carts; 
  } catch (error) {
    console.error("Network or API Error:", error.message);
    throw error;
  }
};