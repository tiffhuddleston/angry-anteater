import React from 'react';

function SearchForm(props) {
  const { handleSubmit, handleChange, searchString } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        type="text"
        placeholder="search for life"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
