import React from 'react';


const SearchForm = ({username, onChangeHandler, submitHandler}) => {

  return (
    <div className="search-form">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          id="search-input"
          placeholder="Enter GitHub username"
          value={username}
          onChange={onChangeHandler}
        />
      </form>
    </div>
  );
}

export default SearchForm;