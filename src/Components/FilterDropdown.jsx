// // src/components/FilterDropdown.js
// // import { react } from "react";

// const FilterDropdown = ({ options, onSelect }) => {
//   const handleChange = (e) => {
//     onSelect(e.target.value);
//   };

//   return (
//     <select onChange={handleChange}>
//       <option value="">Select a filter</option>
//       {options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default FilterDropdown;




// src/components/FilterDropdown.js
const FilterDropdown = ({ options = [], onSelect }) => {
    const handleChange = (e) => {
      onSelect(e.target.value);
    };
  
    return (
      <select onChange={handleChange}>
        <option value="">Select a filter</option>
        {options.length > 0 ? (
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    );
  };
  
  export default FilterDropdown;
  