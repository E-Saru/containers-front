// // src/components/ContainerCard.js
// // import React from 'react';
// import { Link } from 'react-router-dom';

// const ContainerCard = ({ container, onDelete }) => {
//   return (
//     <div className="container-card">
//       <img src={container.photo[0]} alt={container.name} className="card-image" />
//       <h3 className="card-title">{container.name}</h3>
//       <div className="card-actions">
//         <button><Link to={`/containers/${container.id}`} className="btn">View Details</Link></button>
//         <button onClick={() => onDelete(container.id)} className="btn delete-btn">Delete</button>
//       </div>
//     </div>
//   );
// };

// export default ContainerCard;



// src/components/ContainerCard.js
import { Link } from 'react-router-dom';
import "./ContainerCard.css"

const ContainerCard = ({ container, onDelete }) => {
  // Check if photo array exists and has at least one item
  const photoSrc = container.photo && container.photo.length > 0 ? container.photo[0] : 'src/assets/brendan-clark-69YFIZaUZnk-unsplash.jpg';

  return (
    <div className="container-card">
      <img src={photoSrc} alt={container.name || 'No Name Available'} className="card-image" />
      <h3 className="card-title">{container.name || 'Unnamed Container'}</h3>
      <h3 className="card-title" style={{'color':'black'}}>Status: {container.status}</h3>
      <div className="card-actions">
        <button>
          <Link to={`/containers/${container.id}`} className="btn">View Details</Link>
        </button>
        <button onClick={() => onDelete(container.id)} className="btn delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default ContainerCard;
