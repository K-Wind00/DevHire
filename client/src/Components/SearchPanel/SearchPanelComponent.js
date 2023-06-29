import React, { useState } from 'react';

const SearchPanelComponent = ({ handleSearch }) => {
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
    handleSearch(searchQuery);
  };

  return (
    <div className="search-component" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#333", height: "15vh" }}>
      <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '600px' }} value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} />
      </form>
    </div>
  );
};

export default SearchPanelComponent;
