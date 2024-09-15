import { useState, useEffect } from 'react';
import ContainerList from '../Components/ContainersList/ContainersList';
import api from '../api';

const ContainersPage = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    // Fetch containers data using axios
    const fetchContainers = async () => {
      try {
        const response = await api.get('/containers'); // Make the API call
        setContainers(response.data);
      } catch (error) {
        console.error("Error fetching containers:", error);
      }
    };

    fetchContainers();
  }, []);

  return (
    <div>
      <ContainerList containers={containers} />
    </div>
  );
};

export default ContainersPage;
