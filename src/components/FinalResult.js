import React, { useState, useEffect } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function FinalResult(props) {
  const { match } = props;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
      .then(response => response.json())
      .then(response => {
        setCharacter(response);
      })
      .catch(console.error);
  }, [match.params.id]);

  if (!character) {
    return null;
  }

  return (
    <Card className="describe" style={{ width: '18rem' }}>
      <Card.Img
        key={character.id}
        variant="top"
        src={character.image}
        alt="character"
      />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Status: {character.status}</ListGroupItem>
        <ListGroupItem>Place of Origin: {character.origin.name}</ListGroupItem>
        <ListGroupItem>
          Last Knows Location: {character.location.name}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default FinalResult;
