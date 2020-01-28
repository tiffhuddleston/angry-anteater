import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults(props) {
  const { results } = props;

  return (
    <div className="gallery">
      {results &&
        results.map(item => (
          <div key={item.id} className="profilePic">
            <p className="captionName">
              <Link to={'/character/' + item.id}>
                {' '}
                <img src={item.image} />
                {item.name}
              </Link>
            </p>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
