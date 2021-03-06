import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardColumns } from 'react-bootstrap';

function SearchResults(props) {
  const { results } = props;

  return !results ? (
    <h2 className="oops">No Characters Found</h2>
  ) : (
    <div className="gallery">
      {results &&
        results.map(item => (
          <div key={item.id} className="profilePic">
            <Link className="names" to={'/character/' + item.id}>
              <CardColumns>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} alt={item.name} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default SearchResults;
