import React, { useState, useEffect } from 'react';

function FinalResult(props) {
  const { match } = props;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`)
      .then(response => response.json())
      .then(response => {
        setCharacter(response);
        console.log(response);
      })
      .catch(console.error);
  }, []);

  if (!character) {
    return null;
  }

  return (
    <div className="describe">
      <img src={character.image} alt="Photo of character" />
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <p>Place of Origin: {character.origin.name}</p>
      <p>Last Knows Location: {character.location.name}</p>
    </div>
  );
}

export default FinalResult;
