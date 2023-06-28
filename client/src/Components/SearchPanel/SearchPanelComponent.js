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
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '600px'}}></input>
      </form>
    </div>
  );
};

export default SearchComponent;
