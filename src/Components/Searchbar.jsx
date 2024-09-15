// // src/components/SearchBar.js
// import { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = (e) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={query}
//       onChange={handleChange}
//       placeholder="Search..."
//     />
//   );
// };

// export default SearchBar;


// src/components/SearchBar.js
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;

