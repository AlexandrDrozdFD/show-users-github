import React from 'react';


const SearchForm = () => {

  return (
    <form className="search-form">

      <input 
          type="text" 
          id="search-input"
          placeholder="Enter GitHub username" 
      />

    </form>
  );
}

export default SearchForm;