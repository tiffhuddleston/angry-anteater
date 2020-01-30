import React, { useState, useEffect } from 'react';

let randomChar = Math.floor(Math.random() * 494);

function Random() {
  const [random, setRandom] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${randomChar}`)
      .then(response => response.json())
      .then(response => {
        setRandom(response);
      })
      .catch(console.error);
  }, []);

  return (
    <Card className="describe" style={{ width: '18rem' }}>
      <Card.Img
        img="true"
        key={random.id}
        variant="top"
        img
        src={random.image}
        alt="random"
      />
      <Card.Body>
        <Card.Title>{random.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Status: {random.status}</ListGroupItem>
        <ListGroupItem>Place of Origin: {random.origin.name}</ListGroupItem>
        <ListGroupItem>
          Last Knows Location: {random.location.name}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default Return;
