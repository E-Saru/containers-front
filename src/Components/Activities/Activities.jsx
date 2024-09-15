// src/components/Activities.js
import React, { useEffect, useState } from 'react';
import api from '../api'; // Axios instance
import './Activities.css';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await api.get('/activities', {
          params: {
            _page: currentPage,
            _limit: itemsPerPage,
          },
        });
        setActivities(response.data);
        // Assuming total items are provided in the response headers
        const totalItems = parseInt(response.headers['x-total-count'], 10);
        setTotalItems(totalItems);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > Math.ceil(totalItems / itemsPerPage)) return;
    setCurrentPage(page);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="activities">
      <h1>Activities</h1>
      <table className="activities-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Message</th>
            <th>Date</th>
            <th>Container ID</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.action}</td>
              <td>{activity.message}</td>
              <td>{new Date(activity.timestamp).toLocaleDateString()}</td>
              <td>{activity.container_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Activities;
