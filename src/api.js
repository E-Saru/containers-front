// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://containers-back.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const uploadPhotos = (files) => {
  const formData = new FormData();
  files.forEach((file, index) => formData.append(`photos[${index}]`, file));

  return api.post('/upload_photos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

export default api;
