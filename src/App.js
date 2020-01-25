import React, { useEffect, useState } from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

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
    const searchString = 'jerry';
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
