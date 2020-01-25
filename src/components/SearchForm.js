import React from 'react';

function SearchForm() {
  return (
    <form className="form-horizontal">
      <input
        type="text"
        placeholder="search for life"
        name="searchString"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
