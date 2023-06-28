import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <div className="search-component" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#333", height: "15vh" }}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="form-control"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          style={{ width: '300px' }}
          placeholder="Search offers..."
        />
      </form>
    </div>
  );
};

export default SearchComponent;
