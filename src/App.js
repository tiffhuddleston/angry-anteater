import React, { useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

// const data = [
//   {
//     id: 8,
//     name: 'Adjudicator Rick',
//     status: 'Dead',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'unknown',
//       url: ''
//     },
//     location: {
//       name: 'Citadel of Ricks',
//       url: 'https://rickandmortyapi.com/api/location/3'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/28'],
//     url: 'https://rickandmortyapi.com/api/character/8',
//     created: '2017-11-04T20:03:34.737Z'
//   },
//   {
//     id: 9,
//     name: 'Agency Director',
//     status: 'Dead',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20'
//     },
//     location: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/24'],
//     url: 'https://rickandmortyapi.com/api/character/9',
//     created: '2017-11-04T20:06:54.976Z'
//   },
//   {
//     id: 10,
//     name: 'Alan Rails',
//     status: 'Dead',
//     species: 'Human',
//     type: 'Superhuman (Ghost trains summoner)',
//     gender: 'Male',
//     origin: {
//       name: 'unknown',
//       url: ''
//     },
//     location: {
//       name: "Worldender's lair",
//       url: 'https://rickandmortyapi.com/api/location/4'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/25'],
//     url: 'https://rickandmortyapi.com/api/character/10',
//     created: '2017-11-04T20:19:09.017Z'
//   },
//   {
//     id: 1,
//     name: 'Rick Sanchez',
//     status: 'Alive',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1'
//     },
//     location: {
//       name: 'Earth (Replacement Dimension)',
//       url: 'https://rickandmortyapi.com/api/location/20'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     episode: [
//       'https://rickandmortyapi.com/api/episode/1',
//       'https://rickandmortyapi.com/api/episode/2'
//       // ...
//     ],
//     url: 'https://rickandmortyapi.com/api/character/1',
//     created: '2017-11-04T18:48:46.250Z'
//   },
//   {
//     id: 183,
//     name: 'Johnny Depp',
//     status: 'Alive',
//     species: 'Human',
//     type: '',
//     gender: 'Male',
//     origin: {
//       name: 'Earth (C-500A)',
//       url: 'https://rickandmortyapi.com/api/location/23'
//     },
//     location: {
//       name: 'Earth (C-500A)',
//       url: 'https://rickandmortyapi.com/api/location/23'
//     },
//     image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
//     episode: ['https://rickandmortyapi.com/api/episode/8'],
//     url: 'https://rickandmortyapi.com/api/character/183',
//     created: '2017-12-29T18:51:29.693Z'
//   }
// ];

function App() {
  const searchOptions = {
    api: 'https://rickandmortyapi.com/api/',
    endpoint: 'character/'
  };

  const [results, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const searchString = 'beth';
    const url = `${searchOptions.api}${searchOptions.endpoint}?name=${searchString}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.results);
      })
      .catch(console.error);
  }

  return (
    <div>
      <SearchHeader />
      <SearchForm />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
