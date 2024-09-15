// // src/components/ContainerList.js
// import { useState, useEffect } from 'react';
// import api from '../api';
// import ContainerCard from './ContainerCard';
// import FilterDropdown from './FilterDropdown'; // Make sure to create this component
// import SearchBar from './Searchbar';

// const ContainerList = () => {
//   const [containers, setContainers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const fetchContainers = async () => {
//       try {
//         const response = await api.get('/containers');
//         setContainers(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchContainers();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/containers/${id}`);
//       setContainers(containers.filter(container => container.id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredContainers = containers.filter(container =>
//     container.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//     (filter === '' || container.status === filter)
//   );

//   return (
//     <div className="container-list">
//       <h2>Containers</h2>
//       <SearchBar query={searchQuery} setQuery={setSearchQuery} />
//       <FilterDropdown filter={filter} setFilter={setFilter} />
//       <div className="card-container">
//         {filteredContainers.map(container => (
//           <ContainerCard
//             key={container.id}
//             container={container}
//             onDelete={handleDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContainerList;



// src/components/ContainerList.js
import { useState, useEffect } from 'react';
import api from '../../api';
import ContainerCard from '../ContainerCard/ContainerCard';
import FilterDropdown from '../FilterDropdown';
import SearchBar from '../Searchbar';
import './ContainersList.css';


const ContainerList = () => {
  const [containers, setContainers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const filterOptions = [
    { value: '', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'received', label: 'Received' },
    { value: 'dispatched', label: 'Dispatched' },
  ];

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await api.get('/containers');
        setContainers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContainers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/containers/${id}`);
      setContainers(containers.filter(container => container.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const filteredContainers = containers.filter(container =>
    container.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filter === '' || container.status === filter)
  );

  return (
    <div className="container-list">
      <h2>Containers</h2>
      <SearchBar onSearch={setSearchQuery} />
      <FilterDropdown options={filterOptions} onSelect={setFilter} />
      <div className="card-container">
        {filteredContainers.map(container => (
          <ContainerCard
            key={container.id}
            container={container}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ContainerList;
