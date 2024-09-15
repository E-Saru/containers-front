// // // // src/components/ContainerDetails.js
// // // import { useState, useEffect } from 'react';
// // // import { useParams, Link, useNavigate } from 'react-router-dom';
// // // import api from '../../api';

// // // const ContainerDetails = () => {
// // //   const { id } = useParams();
// // //   const history = useNavigate();
// // //   const [container, setContainer] = useState(null);

// // //   useEffect(() => {
// // //     const fetchContainerDetails = async () => {
// // //       try {
// // //         const response = await api.get(`/containers/${id}`);
// // //         setContainer(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchContainerDetails();
// // //   }, [id]);

// // //   const handleDelete = async () => {
// // //     try {
// // //       await api.delete(`/containers/${id}`);
// // //       history.push('/'); // Redirect to home after deletion
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   if (!container) return <p>Loading...</p>;

// // //   return (
// // //     <div className="container-details">
// // //       <h2 className="details-name">{container.name}</h2>
// // //       <img src={container.photo[0]} alt={container.name} className="detail-image" />
// // //       <p>Status: {container.status}</p>
// // //       <p>Description: {container.description}</p>
// // //       <p>Date Received: {container.date_received}</p>
// // //       <p>Date Dispatched: {container.date_dispatched}</p>
// // //       <div className="details-actions">
// // //         <Link to={`/containers/${container.id}/edit`} className="btn">Update</Link>
// // //         <button onClick={handleDelete} className="btn delete-btn">Delete</button>
// // //         <Link to="/" className="btn">Back to List</Link>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ContainerDetails;




// // import { useState, useEffect } from 'react';
// // import { useParams, Link, useNavigate } from 'react-router-dom';
// // import api from '../../api';

// // const ContainerDetails = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [container, setContainer] = useState(null);

// //   useEffect(() => {
// //     const fetchContainerDetails = async () => {
// //       try {
// //         const response = await api.get(`/containers/${id}`);
// //         setContainer(response.data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };

// //     fetchContainerDetails();
// //   }, [id]);

// //   const handleDelete = async () => {
// //     try {
// //       await api.delete(`/containers/${id}`);
// //       navigate('/');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!container) return <p>Loading...</p>;

// //   return (
// //     <div className="container-details">
// //       <h2 className="details-name">{container.name}</h2>
// //       {/* Check if container.photo exists and has at least one item */}
// //       {container.photo && container.photo.length > 0 ? (
// //         <img src={container.photo[0]} alt={container.name} className="detail-image" />
// //       ) : (
// //         <p>No image available</p>
// //       )}
// //       <p>Status: {container.status}</p>
// //       <p>Description: {container.description}</p>
// //       <p>Date Received: {container.date_received}</p>
// //       <p>Date Dispatched: {container.date_dispatched}</p>
// //       <div className="details-actions">
// //         <Link to={`/containers/${container.id}/edit`} className="btn">Update</Link>
// //         <button onClick={handleDelete} className="btn delete-btn">Delete</button>
// //         <Link to="/containers" className="btn">Back to List</Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContainerDetails;





// // src/components/ContainerDetails.js
// import { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import api from '../../api';
// import EditContainer from '../EditContainer'; // Import your modal component
// import Modal from '../Modal';

// const ContainerDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [container, setContainer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchContainerDetails = async () => {
//       try {
//         const response = await api.get(`/containers/${id}`);
//         setContainer(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchContainerDetails();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await api.delete(`/containers/${id}`);
//       navigate('/'); // Redirect to home after deletion
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!container) return <p>Loading...</p>;

//   return (
//     <div className="container-details">
//       <h2 className="details-name">{container.name}</h2>
//       <img src={container.photo[0]} alt={container.name} className="detail-image" />
//       <p>Status: {container.status}</p>
//       <p>Description: {container.description}</p>
//       <p>Date Received: {container.date_received}</p>
//       <p>Date Dispatched: {container.date_dispatched}</p>
//       <div className="details-actions">
//         <button onClick={() => setIsModalOpen(true)} className="btn">Update</button>
//         <button onClick={handleDelete} className="btn delete-btn">Delete</button>
//         <Link to="/" className="btn">Back to List</Link>
//       </div>

//       {/* Modal for editing */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <EditContainer />
//       </Modal>
//     </div>
//   );
// };

// export default ContainerDetails;



// src/components/ContainerDetails.js
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../../api';
import Modal from '../Modal/Modal';
import EditContainer from '../EditContainer';

const ContainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [container, setContainer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchContainerDetails = async () => {
      try {
        const response = await api.get(`/containers/${id}`);
        setContainer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContainerDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/containers/${id}`);
      navigate('/'); // Redirect to home after deletion
    } catch (error) {
      console.error(error);
    }
  };

  if (!container) return <p>Loading...</p>;

  return (
    <div className="container-details">
      <h2 className="details-name">{container.name}</h2>
      {/* Check if container.photo is defined and has at least one photo */}
      {container.photo && container.photo.length > 0 && (
        <img
          src={container.photo[0]}
          alt={container.name}
          className="detail-image"
        />
      )}
      <p>Status: {container.status}</p>
      <p>Description: {container.description}</p>
      <p>Date Received: {container.date_received}</p>
      <p>Date Dispatched: {container.date_dispatched}</p>
      <div className="details-actions">
        <button onClick={() => setIsModalOpen(true)} className="btn">
          Update
        </button>
        <button onClick={handleDelete} className="btn delete-btn">
          Delete
        </button>
        <Link to="/containers" className="btn">Back to List</Link>
      </div>

      {/* Modal for editing */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EditContainer />
      </Modal>
    </div>
  );
};

export default ContainerDetails;
