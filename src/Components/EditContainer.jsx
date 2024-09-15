// src/components/EditContainer.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from './Modal/Modal';
import api from '../api';

const EditContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [container, setContainer] = useState({
    name: '',
    status: '',
    description: '',
    date_received: '',
    date_dispatched: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially open

  useEffect(() => {
    const fetchContainer = async () => {
      try {
        const response = await api.get(`/containers/${id}`);
        setContainer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContainer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContainer({
      ...container,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/containers/${id}`, container);
      navigate(`/containers/${id}`); // Redirect back to details page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <h2>Edit Container</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={container.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={container.status}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={container.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date Received:
          <input
            type="date"
            name="date_received"
            value={container.date_received}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date Dispatched:
          <input
            type="date"
            name="date_dispatched"
            value={container.date_dispatched}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};

export default EditContainer;
