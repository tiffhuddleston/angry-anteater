import React from 'react';
import { Link } from 'react-router-dom';

function SearchResults(props) {
  const { results } = props;
  console.log(results);
  return (
    <div className="gallery">
      {results.map(item => (
        <div key={item.id} className="profilePic">
          <p className="captionName">
            <Link to={'./finalresult/' + item.name}>
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
