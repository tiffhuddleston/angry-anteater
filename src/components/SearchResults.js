import React from 'react';

function SearchResults(props) {
  const { results } = props;
  console.log(results);
  return (
    <div className="gallery">
      {results.map(item => (
        <div key={item.id} className="profilePic">
          <img src={item.image} />
          <p className="captionName">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
