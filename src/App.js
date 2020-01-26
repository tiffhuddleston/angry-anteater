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
  const [searchString, setSearchString] = useState('Rick');
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    getData(searchString);
  }, []);

  function getData() {
    const url = `${searchOptions.api}${searchOptions.endpoint}?name=${searchString}`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response.results);
        setLastSearch(searchString);
        setSearchString('');
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData(searchString);
  }

  return (
    <div>
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
