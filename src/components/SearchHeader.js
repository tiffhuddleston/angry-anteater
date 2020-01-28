import React from 'react';
import { Link } from 'react-router-dom';

function SearchHeader({ lastSearch }) {
  return (
    <div className="head">
      <Link to="/">
        <header>
          <h1 className="title">Rick and Morty Search</h1>
        </header>
      </Link>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </div>
  );
}

export default SearchHeader;
