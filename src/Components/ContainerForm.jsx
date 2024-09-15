// src/components/ContainerForm.js
import  { useState } from 'react';
import api, { uploadPhotos } from '../api';

const ContainerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    category_id: '',
    description: '',
    date_received: '',
    date_dispatched: '',
    photo: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadPhotos(formData.photo)
      .then(response => {
        const photoUrls = response.data.photos;
        const containerData = { ...formData, photo: photoUrls };

        return api.post('/containers', containerData);
      })
      .then(response => {
        console.log(response.data);
        // Handle success
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="status" value={formData.status} onChange={handleChange} placeholder="Status" required />
      <input type="number" name="category_id" value={formData.category_id} onChange={handleChange} placeholder="Category ID" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="datetime-local" name="date_received" value={formData.date_received} onChange={handleChange} />
      <input type="datetime-local" name="date_dispatched" value={formData.date_dispatched} onChange={handleChange} />
      <input type="file" name="photo" multiple onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContainerForm;
