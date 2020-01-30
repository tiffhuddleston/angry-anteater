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
  }, []);

  if (!character) {
    return null;
  }

  return (
    <Card className="describe" style={{ width: '18rem' }}>
      <Card.Img
        img="true"
        key={character.id}
        variant="top"
        img
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

// {/* <img src={character.image} alt="character" />
// <p>Name: {character.name}</p>
// <p>Status: {character.status}</p>
// <p>Place of Origin: {character.origin.name}</p>
// <p>Last Knows Location: {character.location.name}</p> */}
