import axios from "axios";
import { API_BASE_URL } from ".";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Default error handler
const errorHandler = (error) => {
  console.error("server error:", error);
  throw error;
};

// Custom GET method
export const get = async (url) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.get(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const authPost = async (url, data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom POST method
export const post = async (url, data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.post(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom PUT method
export const put = async (url, data) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.put(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom PUT method for form data
export const putForm = async (url, data) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    const response = await api.put(url, data, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};

// Custom DELETE method
export const del = async (url) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await api.delete(url, { headers });
    return response.data;
  } catch (error) {
    errorHandler(error);
  }
};
