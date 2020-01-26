import React from 'react';

function SearchHeader({ lastSearch }) {
  return (
    <div>
      <header>
        <h1 className="title">Rick and Morty Search</h1>
        <p className="muted">
          Showing results for <stron>{lastSearch}</stron>
        </p>
      </header>
    </div>
  );
}

export default SearchHeader;
