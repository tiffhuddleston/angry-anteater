import React from 'react';

function SearchResults(props) {
  const { data } = props;

  return (
    <div className="gallery">
      {data.map(item => (
        <div key={item.id} className="profilePic">
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
