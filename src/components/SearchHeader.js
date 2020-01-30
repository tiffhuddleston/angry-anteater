import React from 'react';
import { Link } from 'react-router-dom';

function SearchHeader({ lastSearch }) {
  return (
    <div className="head">
      <header>
        <h1 className="title">Rick and Morty Search</h1>
        <Link to="/">
          <h2 className="nav">Home</h2>
        </Link>
        <Link to="/about">
          <h2 className="nav"> About</h2>
        </Link>
      </header>
      <p className="muted">
        Showing results for <strong>{lastSearch}</strong>
      </p>
    </div>
  );
}

export default SearchHeader;
