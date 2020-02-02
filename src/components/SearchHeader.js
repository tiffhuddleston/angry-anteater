import React from 'react';
import { Link } from 'react-router-dom';

function SearchHeader({ lastSearch }) {
  return (
    <div className="head">
      <header>
        <h1 className="title">Rick and Morty Search</h1>
        <div className="navBar">
          <Link to="/">
            <h2 className="nav">Home</h2>
          </Link>
          <Link to="/random">
            <h2 className="nav">Random</h2>
          </Link>
          <Link to="/about">
            <h2 className="nav"> About</h2>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default SearchHeader;
